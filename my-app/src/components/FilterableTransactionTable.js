import React, { Component } from "react";
import logo from "../logo.svg";
import "./FilterableTransactionTable.css";
import TransactionRow from "./TransactionRow.js";
import store from "../store";
import Pagination from "./Pagination";
import data from "../data.json";
import { fetchTransaction,updateTransactionTypeFilter } from "../actions/transactionAction";
import {
  updateAccountNameFilter
} from "../action-creator";
import Account from "./Account";
import TransactionType from "./Transactiontype";
import { connect } from 'react-redux';


class FilterableTransactionTable extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTransaction();
    console.log(this.props.allTransactions);
  }

  updateTransactionTypeFilter(e) {
    console.log(e.target.dataset.filter);
    const value = e.target.dataset.filter;
    this.props.updateTransactionTypeFilter(value);
  }
  render = () => {
    
    console.log(this.props.allTransactions);
    console.log(this.props.currentTransactions);
    
    return (
      <div className="container">
        <div className="top_header">
          <h2>My Transactions</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <Account />
              <TransactionType />
            </div>
          </div>
          <div className="col-md-8 ">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Acc. No.</th>
                  <th>Account Name</th>
                  <th>Currency</th>
                  <th>Ammount</th>
                  <th>Transaction</th>
                </tr>
              </thead>
              <tbody>
                   {this.props.currentTransactions.map((item, index) => ( 
                  // console.log(item);
                  
                  
                  <TransactionRow transaction={item} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-8 ">
            <Pagination />
            </div>
          </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  console.log(state,props);
  
  return { 
    allTransactions: state.allTransactions ,
    currentTransactions: state.currentTransactions
 };
};

const mapStateToRed = (dispatch) => {
  return { 
    updateTransactionTypeFilter: updateTransactionTypeFilter ,
    fetchTransaction: fetchTransaction
 };
};

const CounterContainer = connect(
  mapStateToProps,
  mapStateToRed
)(FilterableTransactionTable)

export default CounterContainer;
