import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input data-testid="value-input" type="number" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" data-testid="description-input" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="moeda">
              <option value="usd">USD</option>
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

export default Wallet;
