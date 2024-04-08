import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper title="Add To Basket" onClick={onClick} />);
  const buttonElement = screen.getByText("Add To Basket");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
