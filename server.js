const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes
app.use("/", require("./routes"));

// Start the API server
app.listen(PORT, function () {
    console.log(`App listening on https://localhost:${PORT}/`);
});
