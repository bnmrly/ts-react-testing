import React from "react";

interface Name {
  name: string;
}

export const Person = ({ name }: Name) => (
  <div role="contentinfo">My Name is {name}</div>
);
