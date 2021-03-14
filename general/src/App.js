import React from "react";
//import Jokes from "./Jokes"
//import jokesData from "./jokesData"

import img2 from "./images/img2.png"

/*function App(){
  
  const jokeComp = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} jokeLine={joke.jokeLine} />)

  return(
    <div>
      {jokeComp}
    </div>
  )
}*/


class App extends React.Component{

  click(){
    return(
      //console.log("I was Clicked")
      <p>I was clicked</p>
    )
  }

  render(){
    const img = img2
    return(
      <div>
        <img onMouseOver={() => console.log("Hovered!")} src={img} />
        <br />
        <br />
        <button onClick={this.click}>Click Me</button>
      </div>
    )
  }
}

export default App
