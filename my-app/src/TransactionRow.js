import React, {Component} from 'react'

class TransactionRow extends React.Component {
    render() {
      const product = this.props.product;

      return (
        <tr>
          <td>{product.accountName}</td>
          <td>{product.amount}</td>
          <td>{product.transactionType}</td>
        </tr>
      );
    }
  }

  export default TransactionRow;