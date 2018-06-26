import * as React from "react"
import {hot} from "react-hot-loader"
import {Counter} from "./counter";

export const App = hot(module)(() => (
  <h1>
    Hello, worldasd.<br/>
    <Counter/>
  </h1>
))

