import React, { Component } from "react";
import logo from "./logo.svg";
import "./FilterableTransactionTable.css";
import TransactionRow from "./TransactionRow.js";
import Filter from "./Filter";
import store from './store';
import Pagination from './Pagination';

class FilterableTransactionTable extends React.Component {
  constructor(props) {
    super(props);
     this.transactions = this.props.transactions;
     this.visibleTransactions = this.transactions.slice(0,1);

    store.subscribe(()=>{
      console.log(store.getState());    
      this.visibleTransactions = this.getVisibleTransactions(this.transactions,store.getState().filter);
    })
  }

  getVisibleTransactions = (transactions,filter) =>{
    return transactions.filter(t=> filter.account.length == 0|| filter.account.indexOf(t.accountName)!=-1 )
  }
  recursive = () => {
    setTimeout(() => {
      let hasMore =
        this.visibleTransactions.length + 1 < this.props.transactions.length;
        console.log(hasMore,this.visibleTransactions.length + 1);
        console.log(this.visibleTransactions.length);
        
        this.visibleTransactions = this.transactions.slice(0,  this.visibleTransactions.length + 1)
      if (hasMore) {this.recursive();this.render();}
    }, 0);
  };

  componentDidMount() {
    this.recursive();
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Filter
            className="col-md-4"
          />
                        {/* <Pagination
                totalRecords={this.transactions}
                pageLimit={18}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              /> */}
          <div className="col-md-8">
            {this.visibleTransactions
              .map((item,index) => (
                <TransactionRow product={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableTransactionTable;
