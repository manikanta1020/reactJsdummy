import { useState } from "react"

function Timer(){

    const timeNow = new Date().toLocaleTimeString();
    const [times,setTime] = useState(timeNow)

    function buttonclick(){
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    // setInterval(buttonclick, 1000);

    
    return(
        <div>
            <h1>{times}</h1>
            <button onClick={buttonclick}>show time</button>
        </div>
    )
}

export default Timer;