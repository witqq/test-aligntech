import * as React from "react"
import {CurrencyRates} from "./components/currency-rates";
import {AppStore} from "./app-store";
import {applySnapshot, getSnapshot} from "mobx-state-tree";
import {hot} from "react-hot-loader";
import "antd/dist/antd.less"

const appStore = AppStore.create();

export const App = hot(module)(() => (
  <CurrencyRates store={appStore.currencyRates}/>
));

if (module.hot) {
  if (module.hot.data && module.hot.data.store) {
    applySnapshot(appStore, module.hot.data.store);
  }
  module.hot.dispose(data => {
    data.store = getSnapshot(appStore);
  });
}


