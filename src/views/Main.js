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
    const [bonus, setBonus] = React.useState(0);
    const [overtime, setOvertime] = React.useState(0);

    const sendSalary = (s) => {
        setSalary(s)
    };

    const sendPension = (p) => {
        setPension(p)
    };

    const sendBonus = (b) => {
        setBonus(b)
    };

    const sendOvertime = (o) => {
        setOvertime(o)
    };

    useEffect(() => {
        calculateTakeHome('SCOTLAND', salary, pension, bonus, overtime).then((result) => {
            setTakeHomePay(result);
        });
    }, [salary, pension, bonus, overtime]);

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