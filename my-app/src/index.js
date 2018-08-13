import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch,Route } from "react-router-dom";

import "./index.css";
import FilterableTransactionTable from "./FilterableTransactionTable";
import registerServiceWorker from "./registerServiceWorker";
import data from "./data.json";
import TransactionDetail from './TransactionDetail';
import store from "./store";

// ReactDOM.render(<App />, document.getElementById('root'));
let render = () =>ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true}>
      <FilterableTransactionTable transactions={data.transactions} /> 
      </Route>
     <Route path="/:id" component={TransactionDetail}/> 
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("container")
);
render();
store.subscribe(() => {
  console.log("asdfasdf");
  render();
});

registerServiceWorker();
