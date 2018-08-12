import React, { Component } from "react";
import FilterRow from "./FilterRow";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.account = [];
    this.filters_list = ["Savings Account", "Checking Account","Auto Loan Account","Credit Card Account","Investment Account","Home Loan Account"];
  }

  handleFilterChange(value) {
    if (this.account.indexOf(value) == -1) {
      this.account.push(value);
    } else {
      this.account = this.account.filter(ac => ac != value);
    }
    this.props.handleFilterChange(this.account);
  }

  render() {
    return (
      <form>
        {this.filters_list.map((filter) => 
          <FilterRow
            value={filter}
            isChecked={this.account.indexOf(filter) > -1}
            handleFilterChange={this.handleFilterChange}
          />
        )}
      </form>
    );
  }
}

export default Filter;
