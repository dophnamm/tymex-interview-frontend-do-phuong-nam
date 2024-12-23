import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Roadmap from "./index";

describe("Roadmap Page", () => {
  it("Should render the component", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    );

    const roadmapPageId = container.querySelector("#roadmap-page");
    expect(roadmapPageId).not.toBeNull();
  });
});
