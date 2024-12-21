import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Home from "./index";

describe("Home Page", () => {
  it("Should render the component", () => {
    const { container } = render(<Home />);

    const homePageId = container.querySelector("#home-page");
    expect(homePageId).not.toBeNull();
  });
});
