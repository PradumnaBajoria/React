import React, {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  static getDerivedStateFromProps(props, state){
    // return new updated state based upon props
  }

  getSnapshotBeforeUpdate(){
    //create a backup of a current way things are
  }

  componentDidMount(){

  }

  /*componentWillReceiveProps(nextProps){
    if(nextProps.whatever !== this.props.whatever){
      //do something important here
    }
  }*/

  shouldComponentUpdate(nextProps, nextState){
    //return true if want to update
    //return false if not
  }

  componentWillUnmount(){
    //teardown or cleanup your code before your component disappears
    //(Eg.)remove event listener
  }

  render(){
    return(
      <div>
        Hello World
      </div>
    )   
  }
}

export default App