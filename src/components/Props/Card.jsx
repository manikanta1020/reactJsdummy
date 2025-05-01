import contacts from "./contact";



function Card({name,email,phone,imgUrl}){
    return(
        <>
        <img src={imgUrl} alt={name}  />
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </>
    )
}

// function Details(props){
//     return (
//         <>
//         <p>{props.email}</p>
//         <p>{props.phone}</p>
//         </>
//     )
// }

function Profile(){
    return(
        <>
            <h1>My contacts</h1>
            {/* <Card 
                name={contacts[0].name} 
                imgUrl={contacts[0].imgURL} 
                email={contacts[0].email} 
                phone={contacts[0].phone}
            />
             <Card 
                name={contacts[1].name} 
                imgUrl={contacts[1].imgURL} 
                email={contacts[1].email} 
                phone={contacts[1].phone}
            />
             <Card 
                name={contacts[2].name} 
                imgUrl={contacts[2].imgURL} 
                email={contacts[2].email} 
                phone={contacts[2].phone}
            /> */}

            {contacts.map((contact)=> {
                return (
                    <Card 
                        key={contact.id}
                        name={contact.name} 
                         imgUrl={contact.imgURL}
                         phone={contact.phone}
                         email={contact.email}
                        />
                )
            })}
        </>
    )
}

export default Profile;