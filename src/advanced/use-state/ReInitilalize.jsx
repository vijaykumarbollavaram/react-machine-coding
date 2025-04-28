import { useState } from "react"

function Parent() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Child count={count} />
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}


function Child({count}) {
    const [d] = useState(count)
    return (
        <>
        Current: <h1>{d}</h1>
        Payrent: <h1>{count}</h1>
        </>
    )
}

export {Parent}