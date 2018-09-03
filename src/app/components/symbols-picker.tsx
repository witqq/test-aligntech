import * as React from "react";
import {observer} from "mobx-react";
import {computed} from "mobx";
import {Select} from "antd";
import {OptionProps} from "antd/lib/select";

const Option = Select.Option;

export interface SymbolsPickerProps {
  symbols: Map<string, string>;
  value: string[];
  onChange(value: string[]): void;
}

@observer
export class SymbolsPicker extends React.Component<SymbolsPickerProps> {

  get symbols() {
    return this.props.symbols
  }

  @computed
  get symbolsKeys() {
    return Array.from(this.symbols.keys())
  }

  @computed
  get value() {
    return this.props.value.slice()
  }

  filterOption = (inputValue: string, option: React.ReactElement<OptionProps>) => {
    const search = inputValue.toLowerCase();
    const {value, title} = option.props;
    return value.toString().toLowerCase().indexOf(search) !== -1 || title.toLowerCase().indexOf(search) !== -1
  }

  render() {
    return (
      <Select
        mode="multiple"
        value={this.value}
        filterOption={this.filterOption}
        placeholder="Select users"
        onChange={this.props.onChange}
        style={{width: "100%"}}>
        {this.symbolsKeys.map(s => (
            <Option key={s} value={s} title={this.symbols.get(s)}>{this.symbols.get(s)}</Option>
          )
        )
        }
      </Select>
    );
  }
}