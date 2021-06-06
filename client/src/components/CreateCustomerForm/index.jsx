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

    const [customerID, setCustomerID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [initialCredit, setInitialCredit] = useState("");

    const handleCreateAccount = (e) => {
        e.preventDefault();
        axios
            .post("/api/accounts", {
                customerID,
                firstName,
                lastName,
                initialCredit,
            })
            .then((response) => {
                setCustomerID("");
                setFirstName("");
                setLastName("");
                setInitialCredit("");
                alert("Account Created");
            })
            .catch((error) => {
                alert(error.response.data.error);
            });
    };

    return (
        <Paper className={classes.paper}>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleCreateAccount}
            >
                <TextField
                    fullWidth
                    label="Customer ID"
                    value={customerID}
                    onChange={(e) => setCustomerID(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Initial Credit"
                    value={initialCredit}
                    onChange={(e) => setInitialCredit(e.target.value)}
                />
                <Button color="primary" variant="contained" type="submit">
                    Create Account
                </Button>
            </form>
        </Paper>
    );
}

export default CreateCustomerForm;
