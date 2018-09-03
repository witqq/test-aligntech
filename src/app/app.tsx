import * as React from "react"
import {Counter} from "./components/counter";
import {AppStore} from "./app-store";
import {applySnapshot, getSnapshot} from "mobx-state-tree";
import {hot} from "react-hot-loader";
import {CurrencyApiImpl} from "./services/default/currency-api-impl";

const appStore = AppStore.create();

const api=new CurrencyApiImpl();


api.getLatestValues().then(data => {
  console.log(data);
})

api.getSymbols().then(data => {
  console.log(data);
})

export const App = hot(module)(() => (
  <h1 className={"hello"}>
    Hello, world123
    {process.env.NODE_ENV}
    {process.env.CURRENCY_POLL_INTERVAL}
    <br/>
    <Counter store={appStore.counterStore}/>
  </h1>
));

if (module.hot) {
  if (module.hot.data && module.hot.data.store) {
    applySnapshot(appStore, module.hot.data.store);
  }
  module.hot.dispose(data => {
    data.store = getSnapshot(appStore);
  });
}


