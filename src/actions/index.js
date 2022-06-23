// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';

export const actionLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const actionCurrencies = (currencies) => ({
  type: CURRENCIES,
  payload: currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
    dispatch(actionCurrencies(currencies));
  };
}
