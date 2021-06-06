import { useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1, 0),
        },
        "& .MuiButton-root": {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

function CreateCustomerForm() {
    const classes = useStyles();

    const [searchCustomerId, setSearchCustomerId] = useState("");
    const [results, setResults] = useState({});

    const handleSearchCustomer = (e) => {
        e.preventDefault();
        axios
            .get("/api/accounts/" + searchCustomerId)
            .then((response) => {
                setSearchCustomerId("");
                setResults(response.data);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const DisplayResult = () => (
        <>
            First Name: {results.firstName} <br />
            Last Name: {results.lastName} <br />
            Balance: {results.balance} <br />
            Transactions: <br />
            {results.transactions &&
                results.transactions.map(
                    ({ transactionType, transactionAmount }, index) => (
                        <div key={index}>
                            {transactionAmount} ({transactionType})
                        </div>
                    )
                )}
        </>
    );

    return (
        <Paper className={classes.paper}>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSearchCustomer}
            >
                <TextField
                    fullWidth
                    label="Search Customer By ID"
                    value={searchCustomerId}
                    onChange={(e) => setSearchCustomerId(e.target.value)}
                />
                <Button color="primary" variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {results ? <DisplayResult /> : null}
        </Paper>
    );
}

export default CreateCustomerForm;
