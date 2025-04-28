import React, { useEffect, useState } from "react"
import useCostomEffect from "../../polyfills/customUseEffect";

export function Component() {
    const [count, setCount] = useState(0);

   useEffect(() => {
    console.log("hook called")
    return () => {
        console.log("cleanup called")
    }
   }, [count])

   useCostomEffect(() => {
    console.warn("custom hook called")
    return () => console.warn("custom  cleanup called")
   }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}