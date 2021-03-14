import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

class App extends React.Component{
    render(){
        return(
            <div>
                <Header username="Pradumna"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if(hours<12){
            timeOfDay = "Morning"
        }else if(hours>12 && hours<17){
            timeOfDay = "Afternoon"
        }else{
            timeOfDay = "Night"
        }

        return(
            <p>Good {timeOfDay} to you, Sir or Madam</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))