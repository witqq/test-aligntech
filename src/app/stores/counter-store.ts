import {types} from "mobx-state-tree";

export const CounterStore =
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

export type CounterStore = typeof CounterStore.Type
