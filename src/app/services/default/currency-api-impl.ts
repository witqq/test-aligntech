import {CurrencyApi} from "../interfaces/currency-api";
import Axios from "axios";
import {getFixerApiKey} from "../../utils/env";
import {CurrencySymbolsResponse} from "../interfaces/currency-symbols-response";
import {CurrencyLatestResponce} from "../interfaces/currency-latest-responce";

export class CurrencyApiImpl implements CurrencyApi {

  axios = Axios.create({
      baseURL: "http://data.fixer.io/api"
    }
  );

  get<T = any>(url: string, params?: any): Promise<T> {
    return this.axios.get(url, createApiParams(params))
      .then(({data}) => {
        if (!data.success) {
          throw new Error(data.error.info)
        }
        return data;
      })
  }

  getLatestValues(base?: string, symbols?: string[]): Promise<CurrencyLatestResponce> {

    return this.get<CurrencyLatestResponce>(`/latest`, {params: createApiParams({base, symbols})});
  }

  getSymbols(): Promise<CurrencySymbolsResponse> {
    return this.get<CurrencySymbolsResponse>(`/symbols`, {params: createApiParams()});
  };

}

function createApiParams(params: any = {}) {
  return {...params, access_key: getFixerApiKey()};
}