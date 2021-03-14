import React from "react";
import TodoItem from "./TodoItem"
import todoData from "./todoData"

function MainContent(){
    const todoItem = todoData.map(data => <TodoItem key={data.id} data={data} />)
    return (
        <main className="todo-list">
            {todoItem}
        </main>
    )
}

export default MainContent