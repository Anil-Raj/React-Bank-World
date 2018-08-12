import React, {Component} from 'react';
import TransactionRow from './TransactionRow';


export default class ProductTable extends React.Component {
    render() {
      const account = this.props.account;
  
      const rows = [];
  
      this.props.transactions.forEach((product) => {
        console.log(account);
          console.log(account.length > 0, account.indexOf(product.accountName),product.name)
        if (account.length > 0 && account.indexOf(product.accountName)  == -1 ) {
          return;
        }

        rows.push(
          <TransactionRow
            product={product}
            key={product.name}
          />
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }