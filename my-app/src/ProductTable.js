import React, {Component} from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
      const account = this.props.account;
  
      const rows = [];
  
      this.props.products.forEach((product) => {
          console.log(account,product.name,product)
        if (account && product.name != 'Football') {
          return;
        }

        rows.push(
          <ProductRow
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