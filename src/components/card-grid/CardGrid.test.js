// Create a test for the CardGrid component

import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";

test("renders elements fetched from API", () => {
  render(<CardGrid />);
  // test if figures have been fetched from API
});
