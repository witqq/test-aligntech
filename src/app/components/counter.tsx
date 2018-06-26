import * as React from "react"
import {Component} from "react"
import {CounterStore} from "../stores/counter-store";
import {observer} from "mobx-react";

export interface CounterProps {
  store: CounterStore;
}

@observer
export class Counter extends Component<CounterProps> {

  get store() {
    return this.props.store;
  }

  render() {
    return (
      <div>
        <div>
          {this.store.cnt}
        </div>
        <div>
          <button onClick={this.store.increment}>increment</button>
          <button onClick={this.store.decrement}>decrement</button>
        </div>
      </div>
    )
  }
}