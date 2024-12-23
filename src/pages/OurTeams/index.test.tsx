import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import OurTeams from "./index";

describe("Our Tems Page", () => {
  it("Should render the component", () => {
    const { container } = render(<OurTeams />);

    const ourTeamsPageId = container.querySelector("#our-teams-page");
    expect(ourTeamsPageId).not.toBeNull();
  });
});
