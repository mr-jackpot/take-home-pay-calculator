import React from "react";
import {Grid, TextField} from "@mui/material";
import './AdditionalPayments.css';

const AdditionalPayments = (props) => {
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={"additional-payments-container"}
              spacing={2}
              sx={{width: 500}}>
            <Grid item>
                <p> hI </p>
                <TextField/>
            </Grid>
            <Grid item>
                <p> hI </p>
                <TextField/>
            </Grid>
        </Grid>
    )
}

export default AdditionalPayments;

