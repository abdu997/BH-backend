const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes
app.use("/", require("./routes"));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function () {
    console.log(`App listening on https://localhost:${PORT}/`);
});
