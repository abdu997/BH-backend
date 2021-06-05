const router = require("express").Router();

var accounts = [];

router.get("/", (req, res) => {
    res.json(accounts);
});

module.exports = router;
