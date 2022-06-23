// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES:
    return ({
      ...state,
      currencies: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
