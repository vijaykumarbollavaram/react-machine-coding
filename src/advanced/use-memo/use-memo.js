import React, { memo, useState } from "react"
import useCustomUseMemo from "../../polyfills/customUseMemo";

const Memorize = memo(({count}) => {
  console.log("called");
  return <h1>{count}</h1>
})

export function Component() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const data = useCustomUseMemo(() => {
    return count * 100;
  }, [count])

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      </div>
      <Memorize count={data} />
    </div>
    )
}