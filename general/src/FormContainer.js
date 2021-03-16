import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component{
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
      <FormComponent
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        data={this.state}
      /> 
    ) 
  }
}

export default FormContainer