import { ReactNode } from "react";
import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";

import { useDebounce, useAutoRefresh } from "./index";

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

const Wrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useAutoRefresh", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("fetches data initially", async () => {
    const mockData = { value: "test" };
    const fetchData = vi.fn().mockResolvedValue(mockData);

    const { result } = renderHook(() => useAutoRefresh(fetchData, 1000, [1]), {
      wrapper: Wrapper,
    });

    expect(result.current.isLoading).toBe(true);
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});
