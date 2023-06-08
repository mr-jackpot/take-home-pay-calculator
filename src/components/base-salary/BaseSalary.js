import React from "react";
import {Box, Slider} from "@mui/material";
import './BaseSalary.css';

const marks = [
    {
        value: 0,
        label: '£0',
    },
    {
        value: 50000,
        label: '£50,000',
    },
    {
        value: 100000,
        label: '£100,000',
    },
];
const BaseSalary = (props) => {
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.sendSalary(newValue);
    }

    return (
        <Box className={"base-salary-container"} sx={{width: 400}}>
            <p className={"box-title"}>Base Salary</p>
            <Slider
                marks={marks}
                defaultValue={35000}
                min={0}
                max={100000}
                step={250}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleSliderChange}
            />
        </Box>
    );
}

export default BaseSalary;