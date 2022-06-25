// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const DELETE = 'DELETE';

export const actionLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const actionCurrencies = (currencies) => ({
  type: CURRENCIES,
  payload: currencies,
});

export const actionExpenses = (id, expense, ask) => ({
  type: EXPENSES,
  payload: {
    id,
    ...expense,
    exchangeRates: ask,
  },
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
    dispatch(actionCurrencies(currencies));
  };
}

export function fetchExpenses(id, expense) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    dispatch(actionExpenses(id, expense, json));
  };
}

export const actionDelete = (id) => ({
  type: DELETE,
  payload: id,
});
