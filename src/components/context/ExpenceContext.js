import React, { createContext, useContext, useState, useEffect } from "react";
import { updateUserData } from "../Hook/LocalStorage";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    // const log = JSON.parse(localStorage.getItem("expensesTrackerLoginUser"));

    // const [currentUser, setCurrentUser] = useState({});

    const [balance, setBalance] = useState({
        totalBalance: 0,
        income: 0,
        expenses: 0,
        history: [],
    });
    console.log(balance);
    // useEffect(() => {
    //     setCurrentUser(log);
    //     setBalance(log.balanceData);
    // }, [log]);

    // useEffect(() => {
    //     updateUserData(currentUser, balance);
    // }, [balance, currentUser]);

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};

export const useBalance = () => useContext(BalanceContext);
