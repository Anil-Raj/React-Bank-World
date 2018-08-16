import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectTransaction } from "../reducer";
import PropTypes from "prop-types";

export default class TransactionRow extends React.Component {
  render() {
    const transaction = this.props.transaction;
    return (
      <tr>
        <td>
          <Link
            onClick={() => {
              selectTransaction(transaction);
            }}
            to={transaction.account}
          >
            {transaction.account}
          </Link>{" "}
        </td>
        <td>{transaction.accountName}</td>
        <td>{transaction.currencyCode}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.transactionType}</td>
      </tr>
    );
  }
}
