// import * as React from "react";
// import {render} from "react-dom";
import "./index.css";
import {render} from "react-dom"

const root = document.createElement('div');
document.body.appendChild(root);
root.className = "hello";
root.innerText = "Hello world";
// test vwndor chanck creation
console.log(render);


// const App = () => <h1>Hello world</h1>;
//
// render(<App/>, root);