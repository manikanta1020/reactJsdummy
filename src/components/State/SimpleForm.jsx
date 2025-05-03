import { useState } from "react";

function SimpleForm(){

    const [isHover, setHover] = useState(false)

    function onMouseOverd(){
        setHover(true)
    }
    function onMouseLeaved(){
        setHover(false)
    }
    return(
        <div>
            <h1>Hello</h1>
            <input type="text" placeholder="username" />
            <button
                onMouseOver={onMouseOverd}
                onMouseLeave={onMouseLeaved}
                 
                 style={{backgroundColor: isHover ? "black" : "white"}}>submit</button>
        </div>
    )
}

export default SimpleForm;