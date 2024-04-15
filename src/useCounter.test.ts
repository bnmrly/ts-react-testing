import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

// See - https://github.com/testing-library/react-hooks-testing-library

test("should increment", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
