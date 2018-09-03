import {types, flow} from "mobx-state-tree";
import {mainContainer} from "../services/main-container";
import {CurrencySymbolsResponse} from "../services/interfaces/currency-symbols-response";
import {CurrencyLatestResponce} from "../services/interfaces/currency-latest-responce";
import {getCurrencyPollInterval} from "../utils/env";

const INITIAL_SYMBOLS = {"USD":"USD", "EUR":"USD"};
const INITIAL_VALUE=Object.keys(INITIAL_SYMBOLS);
const baseSymbol = "EUR";

export const CurrencyRatesStore = types.model({
  rates: types.optional(types.map(types.number), {}),
  symbols: types.optional(types.map(types.string), INITIAL_SYMBOLS),
  currentSymbols: types.optional(types.array(types.string), INITIAL_VALUE),
  symbolsLoaded: false,
  loading: true
})
  .views(self => ({
    get symbolsList(){
      return Array.from(self.symbols.keys());
    }
  }))
  .actions(self => ({
      loadSymbols: flow(function*(force = false) {
        if (self.symbolsLoaded && !force) {
          return;
        }
        const result: CurrencySymbolsResponse = yield mainContainer.currencyApi.getSymbols();
        self.symbols = result.symbols as any;
        self.symbolsLoaded = true;

      })
    })
  )
  .actions(self => ({
      load: flow(function*() {
        self.loading = true;
        try {
          yield self.loadSymbols();
          const result: CurrencyLatestResponce = yield mainContainer.currencyApi.getLatestValues(baseSymbol, self.currentSymbols.slice());

          self.rates = result.rates as any;
        }
        finally {
          self.loading = true;
        }
      })
    })
  ).actions(self => {
    let interval: any;
    return {
      afterCreate() {
        self.load();
        interval = setInterval(self.load, getCurrencyPollInterval());
      },
      beforeDestroy() {
        if (interval != null) {
          clearInterval(interval);
          interval = null;
        }
      }
    }
  });

export type CurrencyRatesStore = typeof CurrencyRatesStore.Type;