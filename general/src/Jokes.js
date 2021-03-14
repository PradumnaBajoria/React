import React from "react"

function Jokes(props){
    return(
        <div>
            <p style={{display: !props.question && "none"}}>Question : {props.question}</p>
            <p style={{color : !props.question && "#555555"}}>Joke : {props.joke}</p>
            <hr />
        </div>   
    )
}

export default Jokes