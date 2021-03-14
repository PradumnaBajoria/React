import React from "react";
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class MainContent extends React.Component{

    constructor(){
        super()
        this.state = {
            todo: todoData
        }
    }

    render(){
        
        const todoItem = this.state.todo.map(data => <TodoItem key={data.id} data={data} />)
        
        return (
            <main className="todo-list">
                {todoItem}
            </main>
        )
    }
}

export default MainContent