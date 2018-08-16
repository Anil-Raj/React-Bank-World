import React,{Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchTransaction } from "./actions/transactionAction";
import FilterableTransactionTable from "./components/FilterableTransactionTable";
import TransactionDetail from './components/TransactionDetail';

class App extends Component {
  componentWillMount() {
    // this.props.fetchTransaction();
    fetchTransaction();
    
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <FilterableTransactionTable />
          </Route>
          <Route path="/:id" component={TransactionDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchTransaction: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchTransaction }
)(App);
