import { useEffect, useRef } from "react";

const useDebounce = (cb, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const debounceCB = (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => cb(...args), delay);
  };

  return debounceCB;
};

export default useDebounce;
