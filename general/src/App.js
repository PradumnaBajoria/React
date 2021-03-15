import React from "react";

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.plusOnClick = this.plusOnClick.bind(this)
    this.minusOnClick = this.minusOnClick.bind(this)
  }

  plusOnClick(){
    //this.setState({count: 1})
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
  }

  minusOnClick(){
    //this.setState({count: 1})
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      }
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.plusOnClick}>Click Me to plus</button>
        <button onClick={this.minusOnClick}>Click Me to minus</button>
      </div>
    )
  }
}

export default App
