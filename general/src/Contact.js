import React from "react"
function Contact(props){
    return(
        <div>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <p>Phone : {props.phone}</p>
            <p>Email : {props.email}</p>
        </div>
        
    )
}

export default Contact