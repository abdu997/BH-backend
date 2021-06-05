var router = require("express").Router();

// Register all sub-routes
router.use("/api", require("./api"));

module.exports = router;
