import React from "react";
import Contact from "./Contact"
import img from "./images/img2.png"

function App(){
  return(
    <div>
      <Contact
        name="contact1"
        email="con1@gmail.com"
        img = {img}
        phone = "9632587415"
      />
      <Contact
        name="contact2"
        email="con2@gmail.com"
        img = {img}
        phone = "9432587415"
      />
      <Contact
      name="contact3"
      email="con3@gmail.com"
      img = {img}
      phone = "9633487415"
    />
    </div>
  )
}

export default App