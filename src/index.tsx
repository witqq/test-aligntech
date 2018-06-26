import * as React from "react";
import "./index.css";
import {render} from "react-dom"

const root = document.createElement("div");
document.body.appendChild(root);
root.className = "hello";
root.innerText = "Hello world";

const App = () => <h1>Hello react</h1>;

render(<App/>, root);