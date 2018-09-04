import * as React from "react";
import Table from "antd/es/table/Table";
import {ColumnProps} from "antd/es/table";
import {computed} from "mobx";
import {observer} from "mobx-react";

export interface CurrencyRatesTableRow {
  symbol: string;
  name: string;
  rate: number;
}

export interface CurrencyRatesTableProps {
  symbols: Map<string, string>;
  rates: Map<string, number>;
  loading: boolean;
}

@observer
export class CurrencyRatesTable extends React.Component<CurrencyRatesTableProps> {

  private columns: ColumnProps<CurrencyRatesTableRow>[] = [
    {
      dataIndex: "symbol",
      title: "Symbol"
    }, {
      dataIndex: "name",
      title: "Name"
    }, {
      dataIndex: "rate",
      title: "Rate"
    }
  ]

  @computed
  get dataSource() {
    const {rates, symbols} = this.props;
    const keys = Array.from(rates.keys());
    return keys.map(symbol => ({
      key: symbol,
      name: symbols.get(symbol),
      symbol,
      rate: rates.get(symbol)
    }))
  }

  render() {
    return (
      <Table columns={this.columns}
             dataSource={this.dataSource}
             loading={this.props.loading}
             pagination={false}/>
    );
  }
}