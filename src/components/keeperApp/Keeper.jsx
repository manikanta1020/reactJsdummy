import "./styles.css"
import notes from "./notes";

function Notes({title,content}){
    return (
        <div className="note">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
function Keeper(){
    return(
        <div>
            <header>Keeper App</header>
            {notes.map(note => {
                return (
                    <Notes key={note.title}
                            title={note.title}
                            content={note.content}
                            />)}
                )
            }




<footer className="footer">copyright@2025</footer>  
        </div>
        
    )
}

export default Keeper;