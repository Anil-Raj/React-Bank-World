import React, { Component } from 'react';
import logo from './logo.svg';
import './FilterableProductTable.css';
import ProductRow from './ProductRow.js'
import Filter from './Filter'
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      account: false
    };
    
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  
  handleFilterChange(account) {
    this.setState({
      account: account
    })
  }

  render() {
    return (
      <div>
          <Filter
          account={this.state.account}
          handleFilterChange={this.handleFilterChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          account={this.state.account}
        />
      </div>
    );
  }
}



export default FilterableProductTable;
