import React from "react";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name="Ben" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("My Name is Ben");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
