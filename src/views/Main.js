import React, {useEffect} from "react";
import Stack from "@mui/material/Stack";
import "./Main.css";
import TakeHomePay from "../components/take-home-pay/TakeHomePay";
import BaseSalary from "../components/base-salary/BaseSalary";
import calculateTakeHome from "../business/calculateTakeHomePay";

const Main = () => {
    const [salary, setSalary] = React.useState(0);
    const [takeHomePay, setTakeHomePay] = React.useState(0);
    const sendSalary = (salary) => {
        setSalary(salary);
    }
    useEffect(() => {
        calculateTakeHome('SCOTLAND', salary).then((result) => {
            setTakeHomePay(result);
        });
    }, [salary]);

    return (
        <div className={"stack-container"}>
            <Stack spacing={2}>
                <TakeHomePay pay={takeHomePay}/>
                <BaseSalary sendSalary={sendSalary}/>
            </Stack>
        </div>
    );
}

export default Main;