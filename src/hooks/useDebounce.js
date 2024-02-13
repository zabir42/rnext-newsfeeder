import { useEffect, useRef } from "react";

const useDebounce = (cb, delay) => {
  const timeOutRef = useRef(null);

  const cleanup = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    return cleanup;
  }, []);

  const debounceCB = (...args) => {
    cleanup();
    timeOutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debounceCB;
};

export default useDebounce;
