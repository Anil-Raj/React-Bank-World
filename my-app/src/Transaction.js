import data from './data.json';

export default class Transaction {

    constructor() {
        this.transactions = [];       
    }

    static async getTransaction() {
        this.transactions = await data.transactions;
        return this.transactions;
    }
}
