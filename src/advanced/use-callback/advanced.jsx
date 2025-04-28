import { useEffect, useMemo, useState } from "react";

function UseCallBackAdvanced() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const obj = useMemo( ()=> {
        return count
    }, [count])
    useEffect(() => {
        console.log("hello")
    }, [obj])
    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h3>{count1}</h3>
            <button onClick={() => setCount1(count1 + 1)}>Increment1</button>
        </>
    )
}

export default UseCallBackAdvanced;