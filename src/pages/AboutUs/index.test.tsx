import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import About from "./index";

describe("About Us Page", () => {
  it("Should render the component", () => {
    const { container } = render(<About />);

    const aboutUsPageId = container.querySelector("#about-us-page");
    expect(aboutUsPageId).not.toBeNull();
  });
});
