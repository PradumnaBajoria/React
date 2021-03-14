import React from "react";
import Jokes from "./Jokes"
import jokesData from "./jokesData"

/*function App(){
  
  const jokeComp = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} jokeLine={joke.jokeLine} />)

  return(
    <div>
      {jokeComp}
    </div>
  )
}*/

class App extends React.Component{
  render(){
    const jokeComp = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} jokeLine={joke.jokeLine} />)

    return(
      <div>
        {jokeComp}
      </div>
    )
  }
}

export default App
