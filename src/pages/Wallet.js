import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencies, fetchExpenses } from '../actions';
import Table from '../components/Table';
import '../css/table.css';

const estado = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  state = estado;

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  botaoDespesa = () => {
    const { dispatch } = this.props;
    const { id } = this.state;

    dispatch(fetchExpenses(id, this.state));

    this.setState((estadoAnt) => ({
      ...estado,
      id: estadoAnt.id + 1,
    }));
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form className="form-expense">
          <label htmlFor="value">
            Valor:
            <input
              onChange={ this.onInputChange }
              data-testid="value-input"
              type="number"
              id="value"
              name="value"
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.onInputChange }
              type="text"
              data-testid="description-input"
              name="description"
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              onChange={ this.onInputChange }
              value={ currency }
            >
              { currencies.map((moeda, index) => (
                <option key={ index } value={ moeda }>{ moeda }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              onChange={ this.onInputChange }
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              onChange={ this.onInputChange }
              id="tag"
              data-testid="tag-input"
              name="tag"
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.botaoDespesa }>
            Adicionar despesa
          </button>
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
