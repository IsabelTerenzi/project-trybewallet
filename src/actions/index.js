// Coloque aqui suas actions
// import fetchCurrencies from "../services/fetchAPI";

export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';

export const actionLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const actionCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});
