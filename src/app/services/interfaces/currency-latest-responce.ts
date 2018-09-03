export interface CurrencyLatestResponce {
  base: string//"EUR"
  date: string//"2018-09-03"
  rates: RatesObject//    {AED: 4.267333, AFN: 85.565196, ALL: 126.421991, AMD: 561.566041, ANG: 2.143486, …}
  success: boolean
  timestamp: number
}

export interface RatesObject {
  [key: string]: number;
}