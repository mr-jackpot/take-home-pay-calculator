import React from "react";
import {Grid, OutlinedInput, InputAdornment} from "@mui/material";
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
            <Grid item textAlign={"center"}>
                <p className={"box-title"}> Annual Bonus/Awards </p>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                    sx={{width: 300}}
                    type={"number"}
                />
            </Grid>
            <Grid item textAlign={"center"}>
                <p className={"box-title"}> Overtime </p>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                    sx={{width: 300}}
                    type={"number"}
                />
            </Grid>
        </Grid>
    )
}

export default AdditionalPayments;

