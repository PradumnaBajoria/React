import React from "react";
import Jokes from "./Jokes"

function App(){
  return(
    <div>
      <Jokes 
        question = "What is a pen"
        joke = "Don't know, try askink"
      />
      <Jokes 
        question = "What is a pencil"
        joke = "Don't know, try asking pen"
      />
      <Jokes 
        joke = "Don't know, try askink"
      />
    </div>
  )
}

export default App