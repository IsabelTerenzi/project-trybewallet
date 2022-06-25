import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../css/login.css';
import { actionLogin } from '../actions/index';

class Login extends React.Component {
  state = {
    isButtonDisabled: true,
    email: '',
    senha: '',
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => {
        this.verificaBotao();
      });
  }

  verificaBotao = () => {
    const { email, senha } = this.state;
    const numMin = 6;
    if (senha.length < numMin
      || !email.includes('@')
      || !email.includes('.com')) {
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ isButtonDisabled: false });
    }
  }

  botaoEntrar = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(actionLogin(email));
    history.push('/carteira');
  }

  render() {
    const { isButtonDisabled, email, senha } = this.state;
    return (
      <div>
        <form className="login">
          <h1>Login</h1>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              name="email"
              onChange={ this.onInputChange }
              value={ email }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="senha"
              id="senha"
              data-testid="password-input"
              name="senha"
              onChange={ this.onInputChange }
              value={ senha }
            />
          </label>
          <button
            type="button"
            disabled={ isButtonDisabled }
            onClick={ this.botaoEntrar }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
