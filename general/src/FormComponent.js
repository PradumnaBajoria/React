import React from "react"

function FormComponent(props){
    return(
        <form onSubmit={props.handleSubmit}>
          <label>First Name : </label>
          <input type="text" value={props.data.fname} name="fname" placeholder="First Name" onChange={props.handleChange} />
          <br />
          <br />
          <label>Last Name : </label>
          <input type="text" value={props.data.lname} name="lname" placeholder="Last Name" onChange={props.handleChange} />
          
          <br />
          <br />
          <label>Age : </label>
          <input type="number" value={props.data.age} name="age" placeholder="Age" onChange={props.handleChange} />
          <br />
          <br />
          <label>Gender : </label>
          <label>
            <input 
              type="radio" 
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange} 
            />Male
          </label>
  
          <label>
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange} 
            />Female
          </label>
          <br />
          <br />
          <label>Destination :  </label>
          <select value={props.data.destination} onChange={props.handleChange} name="destination">
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
              checked={props.data.food.isVeg}
              onChange={props.handleChange} 
            />Vegeterian
          </label>
          <label>
            <input 
              type="checkbox" 
              name="isNonVeg"
              checked={props.data.food.isNonVeg}
              onChange={props.handleChange} 
            />Non-Vegeterian
          </label>
          <label>
            <input 
              type="checkbox" 
              name="isVegan"
              checked={props.data.food.isVegan}
              onChange={props.handleChange} 
            />Vegan
          </label>
          <br />
          <br />
          <br />
  
          <p>{props.data.fname} {props.data.lname}</p>
          <p>You age is {props.data.age}</p>
          <p>You are a {props.data.gender}</p>
          <p>Your Destination is {props.data.destination}</p>
          <p>Your Food Preferences is/are {props.data.food.isVeg ? "(Veg)" : null} {props.data.food.isNonVeg ? "(Non Veg)" : null} {props.data.food.isVegan ? "(Vegan)" : null} </p>
          
          <button>Submit</button>
  
          {/*Formic*/}
  
          
        </form>
      )
}

export default FormComponent