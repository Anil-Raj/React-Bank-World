import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import{ selectTransaction} from '../reducer';
import PropTypes from "prop-types";



class TransactionRow extends React.Component {

    render() {
      const transaction = this.props.transaction;
      return (
        <tr>
          <td><Link onClick={()=>{
                                this.props.selectTransaction(transaction);
                            }} to={transaction.account}>{transaction.account}</Link>{' '}</td>
          <td>{transaction.accountName}</td>
          <td>{transaction.currencyCode}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.transactionType}</td>
        </tr>
      );
    }
  }

  
  TransactionRow.propTypes={
  transactions: PropTypes.array.isRequired,
  selectTransaction: PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
  // transactions: state.transactions.filterdItem,
  // item: state.transactions.item
})

export default connect(mapStateToProps,{selectTransaction})(TransactionRow)
