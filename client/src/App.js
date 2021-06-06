import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& .MuiTextField-root": {
            margin: theme.spacing(1, 0),
        },
    },
    content: {
        margin: theme.spacing(2, 0),
    },
}));

// Root of the sir vote-a-lot app that renders Navbar and sections
function App() {
    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.content}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}></Grid>
                        <Grid item xs={12} md={6}></Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default App;
