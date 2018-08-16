import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class TransactionRow extends React.Component {
    render() {
      const product = this.props.product;
      return (
        <tr>
          <td><Link to={product.account}>{product.account}</Link>{' '}</td>
          <td>{product.accountName}</td>
          <td>{product.currencyCode}</td>
          <td>{product.amount}</td>
          <td>{product.transactionType}</td>
        </tr>
      );
    }
  }

  export default TransactionRow;