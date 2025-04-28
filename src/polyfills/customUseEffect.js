import { useRef } from "react";

const useCostomEffect = (effect, deps) => {
  const cleanupRef = useRef();
  const prevDepsRef = useRef();
  let shoudRun = true;

  if(deps && prevDepsRef.current) {
    shoudRun = JSON.stringify(deps) !== JSON.stringify(prevDepsRef.current);
  }
  prevDepsRef.current = deps;

  if(shoudRun) {
    const cleanup = cleanupRef.current;
    if(cleanup && typeof cleanup === 'function') {
      cleanup();
    }
    cleanupRef.current =  effect();
  }
  
}

export default useCostomEffect;