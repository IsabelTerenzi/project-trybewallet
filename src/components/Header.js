import React from 'react';
import { connect } from 'react-redux';
import '../css/header.css';
import { FcMoneyTransfer } from 'react-icons/fc';
import PropTypes from 'prop-types';

class Header extends React.Component {
  despesaTotal = () => {
    const { expenses } = this.props;

    const total = expenses.reduce((preValue, currValue) => preValue + currValue.value
      * currValue.exchangeRates[currValue.currency].ask, 0);

    return ((total * 100) / 100).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div className="header">
        <h1>Trybewallet</h1>
        <FcMoneyTransfer className="icon-money-header" />
        <h3 data-testid="email-field">{email}</h3>
        <h3>Despesa Total: R$</h3>
        <h3 data-testid="total-field">{this.despesaTotal()}</h3>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
