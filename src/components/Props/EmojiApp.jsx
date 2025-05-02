// import emojipedia from "./emoji";


// function EmojiAppCard({name,emoji,meaning}){
//     return (
//         <>
//             <h1>Emoji App</h1>
//             <p>{name}</p>
//             <p>{emoji}</p>
//             <p>{meaning}</p>

//         </>
//     )
// }

// function EmojiApp(){
//     return (
//         <>
//         {emojipedia.map((em)=>{
//             return (
//             <EmojiAppCard name={em.name}
//                       emoji={em.emoji}
//                       meaning={em.meaning}
//                       key={em.id}
//                       />
//             )
          
//           })}
//           </>
//     )
// }

// export default EmojiApp;

import emojipedia from "./emoji";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "16px",
  margin: "10px",
  maxWidth: "300px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
  fontFamily: "Arial, sans-serif"
};

function EmojiAppCard({ name, emoji, meaning }) {
  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: "24px" }}>{emoji}</h2>
      <h3 style={{ margin: "10px 0" }}>{name}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{meaning}</p>
    </div>
  );
}

function EmojiApp() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {emojipedia.map((em) => (
        <EmojiAppCard
          name={em.name}
          emoji={em.emoji}
          meaning={em.meaning}
          key={em.id}
        />
      ))}
    </div>
  );
}

export default EmojiApp;
