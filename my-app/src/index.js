import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import TransactionDetail from './components/TransactionDetail';
import store from "./store";
import { Provider } from 'react-redux';


let render = () =>ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("container")
);
render();
// store.subscribe(() => {
//   console.log("asdfasdf");
//   render();
// });

registerServiceWorker();
