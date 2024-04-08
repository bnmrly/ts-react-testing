import React, { useState } from "react";

export const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
      <div role="contentinfo">Item Count is {count}</div>
    </div>
  );
};
