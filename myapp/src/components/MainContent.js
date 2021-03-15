import React from "react";
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class MainContent extends React.Component{

    constructor(){
        super()
        this.state = {
            todo: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        //console.log("Changed", id)
        this.setState(prevState => {
            const updatedTodo = prevState.todo.map(todo1 => {
                if(todo1.id === id){
                    todo1.completed = !todo1.completed
                }
                return todo1
            })
            return{
                todo: updatedTodo
            }
        })
    }

    render(){
        
        const todoItem = this.state.todo.map(data => <TodoItem key={data.id} data={data} handleChange={this.handleChange} />)
        
        return (
            <main className="todo-list">
                {todoItem}
            </main>
        )
    }
}

export default MainContent
