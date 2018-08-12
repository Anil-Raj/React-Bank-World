import React, {Component} from 'react'

class TransactionRow extends React.Component {
    render() {
      const product = this.props.product;
      console.log(product);
      

      return (
        <div>
          <div>{product.accountName}</div>
          <div>{product.amount}</div>
          <div>{product.transactionType}</div>
        </div>
      );
    }
  }

  export default TransactionRow;