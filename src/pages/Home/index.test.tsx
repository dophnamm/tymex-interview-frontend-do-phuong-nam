import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./index";

describe("Home Page", () => {
  it("Should render the component", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );

    const homePageId = container.querySelector("#home-page");
    expect(homePageId).not.toBeNull();
  });
});
