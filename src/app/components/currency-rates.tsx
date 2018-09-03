import * as React from "react"
import {Component} from "react"
import {observer} from "mobx-react";
import {CurrencyRatesStore} from "../stores/currency-rates-store";
import Button from "antd/es/button/button";
import {SymbolsPicker} from "./symbols-picker";

export interface CurrencyRatesProps {
  store: CurrencyRatesStore;
}

@observer
export class CurrencyRates extends Component<CurrencyRatesProps> {

  get store() {
    return this.props.store;
  }

  render() {
    const store = this.store;
    return (
      <div>
        <div>
          <SymbolsPicker symbols={store.symbols}
                         value={store.currentSymbols}
                         onChange={store.selectSymbols}/>
        </div>
        <div>
          {store.currentSymbols.map(s => <div>{s} {store.rates.get(s)}</div>)}
        </div>
      </div>
    )
  }
}