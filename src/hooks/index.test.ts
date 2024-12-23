import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useDebounce } from "./index";

describe("useDebounce", () => {
  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("should update value after delay", async () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    expect(result.current).toBe("initial");

    rerender({ value: "updated", delay: 500 });

    expect(result.current).toBe("initial");

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("updated");

    vi.useRealTimers();
  });

  it("should cancel previous timeout on new value", async () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    rerender({ value: "first update", delay: 500 });

    await act(async () => {
      vi.advanceTimersByTime(250);
    });

    rerender({ value: "second update", delay: 500 });

    await act(async () => {
      vi.advanceTimersByTime(499);
    });
    expect(result.current).toBe("initial");

    await act(async () => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current).toBe("second update");

    vi.useRealTimers();
  });

  it("should cleanup timeout on unmount", () => {
    vi.useFakeTimers();

    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useDebounce("test", 500));

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
    vi.useRealTimers();
  });
});
