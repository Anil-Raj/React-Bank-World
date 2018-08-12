import React, { Component } from "react";
import logo from "./logo.svg";
import "./FilterableProductTable.css";
import TransactionRow from "./TransactionRow.js";
import Filter from "./Filter";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      account: [],
      items: this.props.transactions.slice(0, 1)
    };

   
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  recursive = () => {
    setTimeout(() => {
      let hasMore = this.state.items.length + 1 < this.props.transactions.length;
      this.setState((prev, props) => ({
        items: props.transactions.slice(0, prev.items.length + 1)
      }));
      if (hasMore) this.recursive();
    }, 0);
  };
  handleFilterChange(account) {
    this.setState({
      account: account
    });
  }
  componentDidMount() {
    this.recursive();
  }
  render() {
    return (
      <div>
        <Filter
          account={this.state.account}
          handleFilterChange={this.handleFilterChange}
        />
        {this.state.items.map(item => (
          
          // <ChildComponent {...item} />
          <TransactionRow
          product={item}
          key={item.name}
        />
        ))}
        {/* <ProductTable
          transactions={this.props.transactions}
          filterText={this.state.filterText}
          account={this.state.account}
        /> */}
      </div>
    );
  }
}

export default FilterableProductTable;
