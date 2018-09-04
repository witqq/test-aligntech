import * as React from "react"
import {Component} from "react"
import {observer} from "mobx-react";
import {CurrencyRatesStore} from "../stores/currency-rates-store";
import {SymbolsPicker} from "./symbols-picker";
import {CurrencyRatesTable} from "./currency-rates-table";
import {Card} from "antd";

export interface CurrencyRatesProps {
  store: CurrencyRatesStore;
}

@observer
export class CurrencyRates extends Component<CurrencyRatesProps> {

  get store() {
    return this.props.store;
  }

  render() {
    const {symbols, rates, currentSymbols, selectSymbols, loading} = this.store;
    return (
      <Card>

        <SymbolsPicker symbols={symbols}
                       value={currentSymbols}
                       onChange={selectSymbols}/>
        <CurrencyRatesTable symbols={symbols}
                            rates={rates}
                            loading={loading}/>
      </Card>
    )
  }
}