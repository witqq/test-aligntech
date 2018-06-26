import * as React from "react"
import {Counter} from "./components/counter";
import {AppStore} from "./app-store";
import {applySnapshot, getSnapshot} from "mobx-state-tree";
import {hot} from "react-hot-loader";

const appStore = AppStore.create();

export const App = hot(module)(() => (
  <h1>
    Hello, world123
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


