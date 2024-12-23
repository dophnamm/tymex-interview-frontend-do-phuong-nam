import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import FeaturedList from "./index";

describe("Featured List Component", () => {
  it("Should render the component", () => {
    const { container } = render(<FeaturedList />);

    const marketplacePageId = container.querySelector("#featured-list");
    expect(marketplacePageId).not.toBeNull();
  });
});
