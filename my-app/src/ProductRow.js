import React, {Component} from 'react'

class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;

      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.stocked?'true':'false'}</td>
        </tr>
      );
    }
  }

  export default ProductRow;