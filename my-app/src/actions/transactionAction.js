import {
    GET_ALL_TRANSACTION,
    FILTER_TRANSACTION,
    SELECT_TRANSACTION
} from "./types";
import data from '../data.json';
import store from '../store';
import axios from 'axios';

export default class Transaction {

    constructor() {
        this.transactions = [];       
    }

    static async getTransaction() {
        this.transactions = await data.transactions;
        return this.transactions;
    }
}


export const fetchTransaction = () => dispatch => {
    Transaction.getTransaction().then(transactions => dispatch({
        type: GET_ALL_TRANSACTION,
        payload: transactions
    })
    );
};


export const filterTransaction = param => dispatch => {
    console.log(param);
     dispatch({
        type:FILTER_TRANSACTION,
        payload: param
    });
};

export const gotoPage = param =>{
    store.dispatch({
        type:'GOTO_PAGE',
        payload:param
    })
}

export const updateTransactionTypeFilter = param => dispatch =>{
    dispatch({
        type:"UPDATE_TYPE_FILTER", 
        param
    })
}

