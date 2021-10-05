import React from "react";
import { useBalance } from "./ExpenceContext";

const DisplayBalance = () => {
    const { balance } = useBalance();
    // const incomeBalance = () => {
    //   let income = 0;

    // }
    return (
        <div className="displayBalance">
            <div className="totalBalance">
                <h2>Total Balance : </h2>
                <p>
                    {balance.totalBalance}
                    <span> Rs </span>
                </p>
            </div>
            <div className="calBalance">
                <div className="incomeBalance">
                    <h4>Income</h4>
                    <p>
                        {balance.income}
                        <span>Rs</span>
                    </p>
                </div>
                <div className="expensesBalance">
                    <h4>Expenses</h4>
                    <p>
                        {balance.expenses}
                        <span>Rs</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DisplayBalance;
