import {types} from "mobx-state-tree";
import {CounterStore} from "./stores/counter-store";

export const AppStore = types.model("AppStore", {
  counterStore: types.optional(CounterStore, {})
})
  .views(self => ({}))
  .actions(self => ({}));

export type AppStore = typeof AppStore.Type;
