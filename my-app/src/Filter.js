import React, { Component } from "react";
import './Filter.css';
import {updateAccountNameFilter, updateTransactionTypeFilter} from './action-creator';
import store from './store';

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.account = [];
    this.account_filters_list = ["Savings Account", "Checking Account","Auto Loan Account","Credit Card Account","Investment Account","Home Loan Account"];
  }

  updateAccountNameFilter(e) {
    console.log(e.target.dataset.filter);
    const value = e.target.dataset.filter;
    console.log(updateAccountNameFilter(value));
    store.dispatch(updateAccountNameFilter(value));
  }
  updateTransactionTypeFilter(e) {
    console.log(e.target.dataset.filter);
    const value = e.target.dataset.filter;
    store.dispatch(updateTransactionTypeFilter(value));
  }


  render() {
    return (
      <div>
        <h2> Filters</h2>
        <div className="filters ">
       
        {this.account_filters_list.map((filter) => 
          <div>
          <input
              type="checkbox"
              data-filter={filter}
              checked={store.getState().filter.account.indexOf(filter) > -1}
              onChange={this.updateAccountNameFilter}
          />
          {filter}
      </div>
        )}
        </div>
      </div>
    );
  }
}

export default Filter;
