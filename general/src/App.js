import React from "react"
import Conditional from "./Conditional"
/*
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }
  
  render(){
    return(
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App*/

/*class App extends React.Component{
  constructor(){
    super()
    this.state = {
      unreadMessages: [
        "Call Me!",
        "You have new Message"
      ]
    }
  }
  
  render(){
    return(
      <div>
        {
          this.state.unreadMessages.length > 0 && 
          <h1>You have {this.state.unreadMessages.length} unread Message</h1>
        }
      </div>
    )
  }
}
*/

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("Working")
    this.setState((prevState) => {
      return{
        isLoggedIn: !prevState.isLoggedIn
      }
      
    })
    //this.setState({isLoggedIn: false})
  }

  render(){
    console.log(this.state.isLoggedIn)
    return(
      <div>
        {this.state.isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
      </div>
    )
  }
}

export default App