import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

test("renders a name", () => {
  const items = [
    {
      name: "test",
      href: "/test",
    },
    {
      name: "test",
      href: "/benmarley.netlify.app",
    },
  ];
  render(<SideBar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[1]).toHaveTextContent(items[1].name);
  expect(anchorElements[1]).toHaveAttribute("href", items[1].href);
});
