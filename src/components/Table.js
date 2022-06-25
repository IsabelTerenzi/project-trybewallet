import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/table.css';
import { actionDelete } from '../actions';

class Table extends React.Component {
   botaoDeleta = (id) => {
     const { dispatch } = this.props;
     dispatch(actionDelete(id));
   }

   render() {
     const { expenses } = this.props;
     return (
       <div className="table">
         <table>
           <thead>
             <tr>
               <th>Descrição</th>
               <th>Tag</th>
               <th>Método de pagamento</th>
               <th>Valor</th>
               <th>Moeda</th>
               <th>Câmbio utilizado</th>
               <th>Valor convertido</th>
               <th>Moeda de conversão</th>
               <th>Editar/Excluir</th>
             </tr>
           </thead>
           <tbody>
             { expenses.map(({
               id,
               description,
               tag,
               method,
               value,
               currency,
               exchangeRates,
             }) => (
               <tr key={ id }>
                 <td>{description}</td>
                 <td>{tag}</td>
                 <td>{method}</td>
                 <td>{Number(value).toFixed(2)}</td>
                 <td>{exchangeRates[currency].name}</td>
                 <td>{Number(exchangeRates[currency].ask).toFixed(2) }</td>
                 <td>{ (value * exchangeRates[currency].ask).toFixed(2) }</td>
                 <td>Real</td>
                 <td>
                   <button
                     type="button"
                     data-testid="delete-btn"
                     onClick={ () => this.botaoDeleta(id) }
                   >
                     Excluir
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     );
   }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
