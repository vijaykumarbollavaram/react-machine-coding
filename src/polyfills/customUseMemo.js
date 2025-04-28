import { useRef } from "react";

function useCustomMemo(callback, deps) {

  const prevDeps = useRef();
  const result = useRef();
  let shouldRun = true;

  if(deps && prevDeps.current) {
    shouldRun = JSON.stringify(deps) !== JSON.stringify(prevDeps.current);
  }

  prevDeps.current = deps;
  if(shouldRun) {
    result.current = callback();
  }
  return result.current;

}

export default useCustomMemo;