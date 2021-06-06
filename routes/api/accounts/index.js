const router = require("express").Router();

var accounts = [
    {
        customerID: "abdulamoud",
        firstName: "Abdul",
        lastName: "Amoud",
    },
];

var transactions = [
    {
        customerID: "abdulamoud",
        transactionType: "debit",
        transactionAmount: 200,
    },
    {
        customerID: "abdulamoud",
        transactionType: "credit",
        transactionAmount: 100,
    },
];

router.get("/:customerID", (req, res) => {
    // Fetch customer using their customerID
    const { customerID } = req.params;

    // Find the customer
    const customerAccount = accounts.find(
        (account) => account.customerID === customerID
    );

    // Retreive customer transactions
    const customerTransactions = transactions.filter(
        (transaction) => transaction.customerID === customerID
    );

    // Calculate customer balance
    let customerBalance = 0;
    for (let { transactionType, transactionAmount } of customerTransactions) {
        if (transactionType === "debit") {
            customerBalance += transactionAmount;
        } else if (transactionType === "credit") {
            customerBalance -= transactionAmount;
        }
    }

    // Spread all customer details into response
    res.json({
        ...customerAccount,
        balance: customerBalance,
        transactions: customerTransactions,
    });
});

router.post("/", (req, res) => {
    const { customerID, initialCredit, firstName, lastName } = req.body;
    // CustomerID is required
    if (!customerID) {
        res.status(400).json({ error: "Missing customerID" });
        return;
    }

    // Create new customer
    const newCustomer = {
        customerID,
        firstName,
        lastName,
    };
    accounts.push(newCustomer);

    // Log initial transaction
    const initialTransaction = {
        customerID,
        transactionType: "debit",
        transactionAmount: initialCredit ? Number(initialCredit) : 0,
    };
    transactions.push(initialTransaction);

    // Return newly minted customer details
    res.json({ ...newCustomer, transactions: initialTransaction });
});

module.exports = router;
