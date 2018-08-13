import React, { Component } from "react";

export default class TransactionDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }

  render() {
    return (
      <div className="container">{this.props.match.params.id}</div>
      )}

    }