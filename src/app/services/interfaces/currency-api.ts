import {CurrencyLatestResponce} from "./currency-latest-responce";
import {CurrencySymbolsResponse} from "./currency-symbols-response";

export interface CurrencyApi {
  getLatestValues(base?: string, symbols?: string[]): Promise<CurrencyLatestResponce>;

  getSymbols(): Promise<CurrencySymbolsResponse>;
}