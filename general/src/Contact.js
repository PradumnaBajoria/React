import React from "react"
function Contact(props){
    return(
        <div>
            <img src={props.contact.img}/>
            <h3>{props.contact.name}</h3>
            <p>Phone : {props.contact.phone}</p>
            <p>Email : {props.contact.email}</p>
        </div>
        
    )
}

export default Contact