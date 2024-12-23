import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./index";

describe("About Us Page", () => {
  it("Should render the component", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
        </Routes>
      </BrowserRouter>
    );

    const aboutUsPageId = container.querySelector("#about-us-page");
    expect(aboutUsPageId).not.toBeNull();
  });
});
