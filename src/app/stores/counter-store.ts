import {types, IModelType} from "mobx-state-tree";

export interface CounterStoreSnap {
  cnt: number;
}

export interface CounterStoreType extends CounterStoreSnap {
  increment(): void;
  decrement(): void;
}

export interface CounterStore extends CounterStoreType {

}

export type CounterStoreModelType = IModelType<Partial<CounterStoreSnap>, CounterStoreType>;

export const CounterStore: CounterStoreModelType =
  types.model("CounterStore", {
    cnt: types.optional(types.number, 0)
  })
    .views(self => ({}))
    .actions(self => ({
      increment() {
        self.cnt++;
      },
      decrement() {
        self.cnt--
      }
    }));
