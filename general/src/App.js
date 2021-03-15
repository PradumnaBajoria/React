import React, {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "male",
      destination: "",
      food: {
        isVeg : false,
        isNonVeg : false,
        isVegan : false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState(prevState => {
        return{
          food: {
            ...prevState.food,
            [name]: checked
          }
        }
      }):
      this.setState({
        [name] : value
      })
  }

  handleSubmit(event){
    alert("Form Submitted")
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>First Name : </label>
        <input type="text" value={this.state.fname} name="fname" placeholder="First Name" onChange={this.handleChange} />
        <br />
        <br />
        <label>Last Name : </label>
        <input type="text" value={this.state.lname} name="lname" placeholder="Last Name" onChange={this.handleChange} />
        
        <br />
        <br />
        <label>Age : </label>
        <input type="number" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />
        <br />
        <br />
        <label>Gender : </label>
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
        <br />
        <label>Destination :  </label>
        <select value={this.state.destination} onChange={this.handleChange} name="destination">
          <option value="">----------</option>
          <option value="america">America</option>
          <option value="egypt">Egypt</option>
          <option value="india">India</option>
          <option value="europe">Europe</option>
        </select>
        <br />
        <br />

        <label>Food Preferences : </label>
        <label>
          <input 
            type="checkbox" 
            name="isVeg"
            checked={this.state.food.isVeg}
            onChange={this.handleChange} 
          />Vegeterian
        </label>
        <label>
          <input 
            type="checkbox" 
            name="isNonVeg"
            checked={this.state.food.isNonVeg}
            onChange={this.handleChange} 
          />Non-Vegeterian
        </label>
        <label>
          <input 
            type="checkbox" 
            name="isVegan"
            checked={this.state.food.isVegan}
            onChange={this.handleChange} 
          />Vegan
        </label>
        <br />
        <br />
        <br />

        <p>{this.state.fname} {this.state.lname}</p>
        <p>You age is {this.state.age}</p>
        <p>You are a {this.state.gender}</p>
        <p>Your Destination is {this.state.destination}</p>
        <p>Your Food Preferences is/are {this.state.food.isVeg ? "(Veg)" : null} {this.state.food.isNonVeg ? "(Non Veg)" : null} {this.state.food.isVegan ? "(Vegan)" : null} </p>
        
        <button>Submit</button>

        {/*Formic*/}

        
      </form>
    )
  }
}

export default App