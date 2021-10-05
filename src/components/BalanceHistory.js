import React, { useState } from "react";
import { useBalance } from "./ExpenceContext";
import InputForm from "./InputForm";

const BalanceHistory = () => {
    const { balance, setBalance } = useBalance();
    const [isOpen, setIsOpen] = useState(false);
    const [isId, setIsId] = useState("");

    const onHandleUpadate = (id) => {
        setIsOpen(!isOpen);
        setIsId(id);
    };

    const setUpdatedBalance = (changeBal) => {
        let total = 0;
        const newBalance = balance.history.map((bal) => {
            if (bal.id === changeBal.id) {
                total +=
                    changeBal.balanceType === "income"
                        ? balance.totalBalance + (changeBal.value - bal.value)
                        : balance.totalBalance + (bal.value - changeBal.value);
                return changeBal;
            } else {
                return bal;
            }
        });
        setBalance({
            totalBalance: total,
            history: [...newBalance],
        });
        setIsOpen(!isOpen);
    };

    const renderHistory = () => {
        return balance.history.map((bal) => {
            return (
                <div className="list" key={bal.id}>
                    <div>
                        <h4>{bal.source}</h4>
                        <p className={`${bal.balanceType}`}>{bal.value}</p>
                        <span className="date">{bal.date}</span>
                    </div>
                    <div className="updateBtn">
                        <i
                            className="fas fa-pen"
                            onClick={() => onHandleUpadate(bal.id)}
                        ></i>
                        {/* <div className="income"></div> */}
                        <div className={`${bal.balanceType}`}></div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="rightDisplay">
            <div className="historyPart">
                <h2>History</h2>
                <div className={`updateModel ${isOpen ? "active" : ""}`}>
                    <InputForm
                        balanceInput={
                            balance.history.filter((bal) => bal.id === isId)[0]
                        }
                        setBalanceInput={setUpdatedBalance}
                        mainForm="modelForm"
                    />
                    <button
                        className="cancelBtn"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Cancel
                    </button>
                </div>
                {renderHistory()}
            </div>
        </div>
    );
};

export default BalanceHistory;
