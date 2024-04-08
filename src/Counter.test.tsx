import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test("handles onClick", () => {
  render(<Counter />);

  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Item Count is 1");
});
