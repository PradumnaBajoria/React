import React, {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {
      fname: "",
      lname: "",
      isFriendly: true,
      gender: "",
      favColor: "red"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    /*this.setState({
      [event.target.name]: event.target.value
    })*/
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }):
      this.setState({
        [name] : value
      })
  }

  handleSubmit(){
    
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.fname} name="fname" placeholder="First Name" onChange={this.handleChange} />
        <br />
        <input type="text" value={this.state.lname} name="lname" placeholder="Last Name" onChange={this.handleChange} />
        
        <br />
        <textarea 
          value={"Default Value"}
          onChange={this.handleChange}  
        />
        <br />
        <label>
          <input 
            type="checkbox" 
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange} 
          />is Friendly
        </label>
        <br />
        <label>
          <input 
            type="radio" 
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange} 
          />Male
        </label>

        <label>
          <input 
            type="radio" 
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange} 
          />Female
        </label>
        <br />
        <label>Favourite Color :  </label>
        <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>


        <h1>{this.state.fname} {this.state.lname}</h1>
        <br />
        <p>You are a {this.state.gender}</p>
        <p>Your favourite color is {this.state.favColor}</p>
        
        <button>Submit</button>

        {/*Formic*/}

        
      </form>
    )
  }
}

export default App