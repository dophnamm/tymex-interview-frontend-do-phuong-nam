import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Whitepaper from "./index";

describe("Whitepaper Page", () => {
  it("Should render the component", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index element={<Whitepaper />} />
        </Routes>
      </BrowserRouter>
    );

    const whitepaperPageId = container.querySelector("#whitepaper-page");
    expect(whitepaperPageId).not.toBeNull();
  });
});
