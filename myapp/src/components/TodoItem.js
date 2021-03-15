import React from "react";

function TodoItem(props){
    const completedStyle = {
        color: "#cccccc",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.data.completed} 
                onChange={() => props.handleChange(props.data.id)}
            />
            <p style={props.data.completed ? completedStyle : null}>{props.data.item}</p>
        </div>
    )
}

export default TodoItem