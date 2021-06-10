const Transactions = require("../Transactions");
var accounts = require("../../store/Accounts");

// Dynamic customer account class
class Account {
    constructor(customerID) {
        this.customerID = customerID;
        this.transactions = new Transactions(customerID);
    }

    // Get balance
    get balance() {
        return this.transactions.customerBalance;
    }

    // Get all customer transactions
    get accountTransactions() {
        return this.transactions.customerTransactions;
    }

    // Assemble customer information
    get customer() {
        return {
            ...this.findCustomer(),
            balance: this.balance,
            transactions: this.accountTransactions,
        };
    }

    // Filter customer account from store
    findCustomer() {
        return accounts.find(
            (account) => account.customerID === this.customerID
        );
    }

    // Create new customer
    createCustomer(firstName, lastName, initialCredit) {
        const newCustomer = {
            customerID: this.customerID,
            firstName,
            lastName,
        };
        accounts.push(newCustomer);
        this.transactions.logInitialTransaction(initialCredit);
    }
}

module.exports = Account;
