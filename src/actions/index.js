// Coloque aqui suas actions

// Toda interação do usuário na interface da aplicação, precisa gerar uma action, pois o estado global será alterado.
// Ou seja, um clique em um botão, o preenchimento de um input, todos esses são ações.

export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

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

export const actionEdit = (idToEdit) => ({
  type: EDIT,
  payload: idToEdit,
});

// a Action de delete usa o id como parâmetro, pois dos elementos da tabela, o id é o único que não irá se repetir.
