import React from "react";
import {Box} from "@mui/material";
import './TakeHomePay.css';

const TakeHomePay = (props) => {
    return (
        <Box className={"pay-container"}>
            {props.pay}
        </Box>
    );
}

export default TakeHomePay;