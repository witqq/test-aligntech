import {types} from "mobx-state-tree";
import {CurrencyRatesStore} from "./stores/currency-rates-store";

export const AppStore = types.model("AppStore", {
  currencyRates: types.optional(CurrencyRatesStore, {})
});

export type AppStore = typeof AppStore.Type;
