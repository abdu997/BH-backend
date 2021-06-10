const router = require("express").Router();
const Account = require("../../../controllers/Account");

router.get("/:customerID", (req, res) => {
    // Fetch customer using their customerID
    const { customerID } = req.params;

    // Fetch customer
    const account = new Account(customerID);
    const customerAccount = account.customer;

    // If customer does not exist
    if (!customerAccount) {
        res.status(404).json({ error: "Customer Does Not Exist" });
        return;
    }

    // Spread all customer details into response
    res.json(customerAccount);
});

router.post("/", (req, res) => {
    const { customerID, initialCredit, firstName, lastName } = req.body;
    // CustomerID is required
    if (!customerID) {
        res.status(400).json({ error: "Missing customerID" });
        return;
    }

    // Create customer
    const account = new Account(customerID);
    account.createCustomer(firstName, lastName, initialCredit);

    // Return newly minted customer details
    res.json(account.customer);
});

module.exports = router;
