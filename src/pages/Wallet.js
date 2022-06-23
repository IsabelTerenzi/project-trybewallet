import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  };

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input data-testid="value-input" type="number" id="valor" name="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" data-testid="description-input" name="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="moeda">
              { currencies.map((currency, index) => (
                <option key={ index } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento" data-testid="method-input" name="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão de crédito">Cartão de crédito</option>
              <option value="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select id="categoria" data-testid="tag-input" name="categoria ">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
