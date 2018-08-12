import React, { Component } from "react";
import logo from "./logo.svg";
import "./FilterableTransactionTable.css";
import TransactionRow from "./TransactionRow.js";
import Filter from "./Filter";
import TransactionTable from "./TransactionTable";

class FilterableTransactionTable extends React.Component {
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
      let hasMore =
        this.state.items.length + 1 < this.props.transactions.length;
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
        {
          this.state.items
        .filter(item => this.state.account.length == 0 || (this.state.account.length > 0 && this.state.account.indexOf(item.accountName) > -1))
        .map(item => 
          <TransactionRow product={item} key={item.name} />
        )
      }
      </div>
    )
  }
}

export default FilterableTransactionTable;
