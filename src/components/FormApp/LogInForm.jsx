// function login(){
//     if (true){
//         return <h1>user Loged in</h1>
//     }
//     else{
//         return <form action="">
//         <input type="text"  placeholder="user name"/>
//         <input type="password"  placeholder="password"/>
//         <button>login</button>
//     </form>
//     }
// }

const logindetails = false;

function Input(props){
    return (
        <input type={props.type} placeholder={props.placeholder} />
    )
}
function Form(){
    return(
        <>
            <form action="">
                <Input type="text" placeholder="username"/>
                <Input type="password" placeholder="password"/>
                <button>login</button>

            </form>
        </>
    )
}
function LogInForm(){
    return(
        <div>
            {logindetails ? <h1>user Loged in</h1> : <Form />}
            {/* {login()} */}
            
            
        </div>
    )
}

export default LogInForm;