import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const fname = "Pradumna";
    const lname = "Bajoria";
    const date = new Date();
    //const date = new Date(2020, 2, 28, 11);
    const hours = date.getHours();
    let timeOfDay;

    const style = {
        color : "#ff8800", 
        backgroundColor : "#eeff00",
        fontSize : 50
    }

    if(hours < 12){
        timeOfDay = "morning";
        style.color = "004563"
    }else if(hours>12 && hours<17){
        timeOfDay = "afternoon"
        style.color = "bbccdd"
    }else{
        timeOfDay = "night";
        style.color = "cdff34"
    }

    

    return(
        <h1 style={style}>Hello {fname + " " + lname}, Good {timeOfDay}</h1>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));