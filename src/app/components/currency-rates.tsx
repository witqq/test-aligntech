import * as React from "react"
import {Component} from "react"
import {observer} from "mobx-react";
import {CurrencyRatesStore} from "../stores/currency-rates-store";
import Button from "antd/es/button/button";

export interface CurrencyRatesProps {
  store: CurrencyRatesStore;
}

@observer
export class CurrencyRates extends Component<CurrencyRatesProps> {

  get store() {
    return this.props.store;
  }

  render() {
    return (
      <div>
        <div>
          {this.store.currentSymbols.map(s => <p>{s}</p>)}
        </div>
        <div>
          {this.store.currentSymbols.map(s => <div>{s} {this.store.rates.get(s)}</div>)}
        </div>
        <Button >123</Button>
      </div>
    )
  }
}