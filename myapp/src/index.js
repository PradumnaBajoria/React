import React from "react";
import ReactDom from "react-dom";

import App from "./App.js";
import "./style.css";

//ReactDom.render(<div><h1>Hello World</h1><p>This is paragraph</p></div>, document.getElementById("root"))
ReactDom.render(<App />, document.getElementById("root"))
