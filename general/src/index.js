import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            answer: "Yes",
            name: "Prdaumna",
            age: 20,
            isLoggedIn: false
        }
    }
    render(){

        let word
        if(this.state.isLoggedIn){
            word = "in"
        }else{
            word = "out"
        }

        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
                <p>Are you learning State?</p>
                {this.state.answer}
                <p>You are logged {word}</p>
                

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))