import React from "react"
import icon from "./images/meme_icon.png"

function Header(){
    return(
        <header>
            <img src={icon} alt="loading..." height="100px" width="100px" />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header