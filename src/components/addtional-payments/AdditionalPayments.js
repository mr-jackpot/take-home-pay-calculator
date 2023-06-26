import React from "react";
import {Grid, OutlinedInput, InputAdornment} from "@mui/material";
import './AdditionalPayments.css';

const AdditionalPayments = (props) => {

    const [bonus, setBonus] = React.useState(0);
    const [overtime, setOvertime] = React.useState(0);
    const bonusValueChange = (e) => {
        setBonus(e);
        props.sendBonus(e);
    }

    const overtimeValueChange = (e) => {
        setOvertime(e);
        props.sendOvertime(e);
    }

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
                    value={bonus}
                    onChange={(e) => bonusValueChange(e.target.value)}
                />
            </Grid>
            <Grid item textAlign={"center"}>
                <p className={"box-title"}> Overtime </p>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                    sx={{width: 300}}
                    type={"number"}
                    value={overtime}
                    onChange={(e) => overtimeValueChange(e.target.value)}
                />
            </Grid>
        </Grid>
    )
}

export default AdditionalPayments;

