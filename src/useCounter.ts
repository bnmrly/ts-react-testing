import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  return { count, increment };
}
