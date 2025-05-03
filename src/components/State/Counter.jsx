import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(prevCount => prevCount+1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

   
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}

export default Counter;