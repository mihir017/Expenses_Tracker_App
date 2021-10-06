import React, { useEffect, useState } from "react";
import { useBalance } from "./context/ExpenceContext";
import InputForm from "./InputForm";

const Form = () => {
    const [balanceData, setBalanceData] = useState({});
    const { setBalance } = useBalance();

    const setNewBalance = (newBalance) => {
        console.log(newBalance);
        setBalanceData(newBalance);
    };
    useEffect(() => {
        if (Object.keys(balanceData).length > 0) {
            setBalance((prevBalance) => {
                return {
                    totalBalance:
                        balanceData.balanceType === "income"
                            ? prevBalance.totalBalance + balanceData.value
                            : prevBalance.totalBalance - balanceData.value,
                    income:
                        balanceData.balanceType === "income"
                            ? prevBalance.income + balanceData.value
                            : prevBalance.income,
                    expenses:
                        balanceData.balanceType === "expance"
                            ? prevBalance.expenses + balanceData.value
                            : prevBalance.expenses,
                    history: [...prevBalance.history, balanceData],
                };
            });
        }
    }, [balanceData, setBalance]);

    return <InputForm setBalanceInput={setNewBalance} mainForm="mainForm" />;
};

export default Form;
