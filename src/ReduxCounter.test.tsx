import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import { ReduxCounter } from "./ReduxCounter";
import { createStore } from "./store";

// uses redux toolkit approach

test("increment", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

// need to ensure that environemntis clean or first test will fail

test("increment again", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});
