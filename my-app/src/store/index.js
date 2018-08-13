import { createStore } from "redux";
import reducer from "../reducer";

const initialState = {
  filter: {
    account: [],
    transaction: []
  }
};
export default createStore(reducer, initialState); //this has been updated to include the created reducer.
