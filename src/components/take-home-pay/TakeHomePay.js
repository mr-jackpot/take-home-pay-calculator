import React from "react";
import {Box} from "@mui/material";
import './TakeHomePay.css';

const TakeHomePay = (props) => {
    return (
        <Box className={"pay-container"}>
            <p className={"box-title"} id={"pay-value"}>£{props.pay}</p>
        </Box>
    );
}

export default TakeHomePay;