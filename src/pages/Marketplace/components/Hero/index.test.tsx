import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Hero from "./index";

describe("Hero Component", () => {
  it("Should render the component", () => {
    const { container } = render(<Hero />);

    const marketplacePageId = container.querySelector("#hero");
    expect(marketplacePageId).not.toBeNull();
  });
});
