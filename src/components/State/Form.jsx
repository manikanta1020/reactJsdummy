import { useState } from "react";

function Form(){
    const [name,setName] = useState("")
    const [heading, setHeading] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    function headingSet(e){
        setHeading(name)
        e.preventDefault()
    }

    return (
        <div>
            <h1>my name is {heading}</h1>
            <form onSubmit={headingSet}>
            <input type="text" placeholder="username" 
                    onChange={handleChange}
                    value={name}
                        />
            <button type="submit">submit</button>
            </form>
            
        </div>
    )
}

export default Form;