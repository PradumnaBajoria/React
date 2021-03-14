import React from "react";

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.data.completed} onChange={() => console.log("Changed!")}/>
            <p>{props.data.item}</p>
        </div>
    )
}

export default TodoItem