const DEFAULT_CURRENCY_POLL_INTERVAL = 3600000;

export const getCurrencyPollInterval = () => {
  const envValue = process.env.CURRENCY_POLL_INTERVAL;
  if (envValue != null) {
    return parseInt(envValue);
  }
  return DEFAULT_CURRENCY_POLL_INTERVAL;
}

export const getFixerApiKey = () => {
  const key = process.env.FIXER_API_KEY;
  if (key == null) {
    throw new Error("You should create .env file in root directory and set FIXER_API_KEY to make api calls.")
  }
  return key;
}