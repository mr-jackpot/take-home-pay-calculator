import React, {useEffect} from "react";
import Stack from "@mui/material/Stack";
import "./Main.css";
import TakeHomePay from "../components/take-home-pay/TakeHomePay";
import BaseSalary from "../components/base-salary/BaseSalary";
import calculateTakeHome from "../business/calculateTakeHomePay";
import PensionContribution from "../components/pension-contribution/PensionContribution";
import AdditionalPayments from "../components/addtional-payments/AdditionalPayments";

const Main = () => {
    const [salary, setSalary] = React.useState(0);
    const [pension, setPension] = React.useState(0);
    const [takeHomePay, setTakeHomePay] = React.useState(0);
    const sendSalary = (salary) => {
        setSalary(salary);
    };

    const sendPension = (pension) => {
        setPension(pension);
    };

    const sendBonus = (bonus) => {
        setSalary(salary + bonus);
    }

    const sendOvertime = (overtime) => {
        setSalary(salary + overtime);
    }

    useEffect(() => {
        calculateTakeHome('SCOTLAND', salary, pension).then((result) => {
            setTakeHomePay(result);
        });
    }, [salary, pension]);

    return (
        <div className={"stack-container"}>
            <Stack spacing={2}>
                <TakeHomePay pay={takeHomePay}/>
                <BaseSalary sendSalary={sendSalary}/>
                <PensionContribution sendPension={sendPension}/>
                <AdditionalPayments sendBonus={sendBonus} sendOvertime={sendOvertime}/>
            </Stack>
        </div>
    );
}

export default Main;