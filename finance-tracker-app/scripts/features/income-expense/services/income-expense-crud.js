// Service Layer - Logic for CRUD Operations
// export - wrap the things (structure) in an object and then export
// destructure - import {x,y} from 'file'

import Transaction from "../models/transaction.js";

// export default - import x from 'file'
const transactionOperations = {
    // Array of Transactions
    transactions:[], // store Transaction one by one
    getAllTransactions(){
        return this.transactions;
    },
    add(transObject){
        const transaction = new Transaction(); // Model
        for(let key in transObject){
            transaction[key] = transObject[key]; // Generic to Specific Conversion
        }
        this.transactions.push(transaction); // Store Specific Object
        console.log('All Trans ', this.transactions);
        return transaction;
    },
    getTransactionsCount(){
        return this.transactions.length;
    },

    remove(){
        // Delete ForEver
        this.transactions = this.transactions.filter(transactionObject=>!transactionObject.isDeleted)
        return this.transactions;
    },
    search(transactionId){
        // if found - return the transaction object, otherwise undefined
        return this.transactions.find((transactionObject)=>transactionObject.id == transactionId);
    },
    toggleMark(transactionId){
        const transObject = this.search(transactionId);
        if(transObject){
            transObject.toggleMark();
        }
    },
    countMarked(){
        return this.transactions.filter(transObject=>transObject.isDeleted).length;
    },
    countUnMarked(){
        return this.transactions.length - this.countMarked();
    },
    sort(){

    },
    update(){

    },
    countTransaction(){

    }
}
export default transactionOperations;
// default - use only one time in a single file.