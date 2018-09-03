export interface CurrencySymbolsResponse {
  success: true,
  symbols: CurrencySymbolsMap;
}

export interface CurrencySymbolsMap {
  [key: string]: string;
}