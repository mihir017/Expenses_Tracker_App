import React, { createContext, useContext, useState } from "react";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState({
        totalBalance: 0,
        income: 0,
        expenses: 0,
        history: [],
    });

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};

export const useBalance = () => useContext(BalanceContext);
