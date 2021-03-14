import React from "react";
import Contact from "./Contact"
import img from "./images/img2.png"

function App(){
  return(
    <div>
      <Contact
        contact={{name: "Mr. 1", img: img, phone: "9874563256", email: "mr1@gmail.com"}}
      />
      <Contact
        contact={{name: "Mr. 1", img: img, phone: "9874563256", email: "mr1@gmail.com"}}
      />
      <Contact
        contact={{name: "Mr. 1", img: img, phone: "9874563256", email: "mr1@gmail.com"}}
    />
    </div>
  )
}

export default App