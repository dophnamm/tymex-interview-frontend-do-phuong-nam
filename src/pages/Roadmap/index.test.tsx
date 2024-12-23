import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Roadmap from "./index";

describe("Roadmap Page", () => {
  it("Should render the component", () => {
    const { container } = render(<Roadmap />);

    const roadmapPageId = container.querySelector("#roadmap-page");
    expect(roadmapPageId).not.toBeNull();
  });
});
