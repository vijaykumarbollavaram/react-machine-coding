import React, { useState } from "react"

export function UseReconclination() {
    const a = useState(10)
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Click</button>
            {count > 10 ? <h1>Hello</h1> : ''}
            {count}
            <h1>{useState(1)[0]}</h1>
        </>
    )
    
}