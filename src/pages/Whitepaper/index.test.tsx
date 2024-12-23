import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Whitepaper from "./index";

describe("Whitepaper Page", () => {
  it("Should render the component", () => {
    const { container } = render(<Whitepaper />);

    const whitepaperPageId = container.querySelector("#whitepaper-page");
    expect(whitepaperPageId).not.toBeNull();
  });
});
