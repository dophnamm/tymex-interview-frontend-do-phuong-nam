import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OurTeams from "./index";

describe("Our Tems Page", () => {
  it("Should render the component", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index element={<OurTeams />} />
        </Routes>
      </BrowserRouter>
    );

    const ourTeamsPageId = container.querySelector("#our-teams-page");
    expect(ourTeamsPageId).not.toBeNull();
  });
});
