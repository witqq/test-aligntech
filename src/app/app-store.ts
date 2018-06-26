import {types, IModelType} from "mobx-state-tree";
import {CounterStoreSnap, CounterStore} from "./stores/counter-store";

export interface AppStoreSnap {
  counterStore: CounterStoreSnap;
}

export interface AppStoreType extends AppStoreSnap {
  counterStore: CounterStore;
}

export interface AppStore extends AppStoreType {

}

export type AppStoreModelType = IModelType<Partial<AppStoreSnap>, AppStoreType>;

export const AppStore: AppStoreModelType
  = types.model("AppStore", {
  counterStore: types.optional(CounterStore, {})
})
  .views(self => ({}))
  .actions(self => ({}));
