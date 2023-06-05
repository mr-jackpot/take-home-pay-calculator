import React from "react";
import Stack from "@mui/material/Stack";
import "./Main.css";
import TakeHomePay from "../components/take-home-pay/TakeHomePay";
import BaseSalary from "../components/base-salary/BaseSalary";

const Main = () => {

    const [salary, setSalary] = React.useState(35000);
    const sendSalary = (salary) => {
        setSalary(salary);
    }
    return (
        <div className={"main-container"}>
            <Stack spacing={2}>
                <TakeHomePay pay={salary}/>
                <BaseSalary sendSalary={sendSalary}/>
            </Stack>
        </div>
    );
}

export default Main;