import React from "react";
import ReactDOM from "react-dom";

var name = "vishwas";
var age = 18;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My age is {age}</p>
  </div>,
  document.getElementById("root")
);
