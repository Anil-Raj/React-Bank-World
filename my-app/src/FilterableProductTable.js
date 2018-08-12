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
        
        {this.state.items.map(item => {
                // console.log(this.state.account)
                // console.log(this.state.account.length , this.state.account.indexOf(item.accountName),item.name)
              //   console.log(this.state.account.length == 0 ||( this.state.account.length > 0 && this.state.account.indexOf(item.accountName)  > -1 ));
              // if (this.state.account.length == 0 ||( this.state.account.length > 0 && this.state.account.indexOf(item.accountName)  > -1 )) {
              //   console.log(item);
                <TransactionRow
                  product={item}
                  key={item.name}
                />
              
              
        })
      }
      </div>
    );
  }
}

export default FilterableProductTable;
