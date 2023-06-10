import React from "react";
import {Box, Slider} from "@mui/material";
import './PensionContribution.css';

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 5,
        label: '5%',
    },
    {
        value: 10,
        label: '10%',
    },
];
const PensionContribution = (props) => {
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.sendPension(newValue);
    }

    return (
        <Box className={"pension-contribution-container"} sx={{width: 400}}>
            <p className={"box-title"}>Employee Pension Contribution</p>
            <Slider
                marks={marks}
                defaultValue={0}
                min={0}
                max={10}
                step={1}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleSliderChange}
            />
        </Box>
    );
}

export default PensionContribution;