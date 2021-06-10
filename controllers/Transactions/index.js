var transactions = require("../../store/Transactions");

// Dynamic account class
class Transactions {
    constructor(customerID) {
        this.customerID = customerID;
    }

    // Get all customer transactions
    get customerTransactions() {
        return this.findCustomerTransaction();
    }

    // Get customer balance
    get customerBalance() {
        return this.getCustomerBalance();
    }

    // Retreive customer transactions
    findCustomerTransaction() {
        return transactions.filter(
            (transaction) => transaction.customerID === this.customerID
        );
    }

    // Calculate customer balance
    getCustomerBalance() {
        let customerBalance = 0;
        for (let { transactionType, transactionAmount } of this
            .customerTransactions) {
            if (transactionType === "debit") {
                customerBalance += transactionAmount;
            } else if (transactionType === "credit") {
                customerBalance -= transactionAmount;
            }
        }
        return customerBalance;
    }

    // Log initial transaction, 0 if undefined.
    logInitialTransaction(initialCredit) {
        this.logTransaction("debit", Number(initialCredit) || 0);
    }

    // Inserts transaction on the record
    logTransaction(type, amount) {
        const transaction = {
            customerID: this.customerID,
            transactionType: type,
            transactionAmount: amount,
        };
        transactions.push(transaction);
    }
}

module.exports = Transactions;
