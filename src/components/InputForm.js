import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ setBalanceInput, balanceInput = {}, mainForm }) => {
    const [balanceData, setBalanceData] = useState({
        value: "",
        source: "",
        balanceType: "",
        date: "",
        id: uuidv4(),
    });
    useEffect(() => {
        if (Object.keys(balanceInput).length > 0) {
            setBalanceData({ ...balanceInput });
        }
    }, [balanceInput]);

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setBalanceData((prevData) => {
            return {
                ...prevData,
                [name]: name === "value" ? parseFloat(value) : value,
            };
        });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();

        setBalanceInput({ ...balanceData });
        setBalanceData({ value: "", source: "", balanceType: "" });
    };
    return (
        <div className={`${mainForm}`}>
            <form onSubmit={onHandleSubmit}>
                <div className="enterInput">
                    <InputField
                        type="number"
                        name="value"
                        placeholder="Enter value of Expenses or Income"
                        onChange={onHandleChange}
                        value={balanceData.value}
                    />
                    <InputField
                        type="text"
                        name="source"
                        placeholder="Enter Source"
                        onChange={onHandleChange}
                        value={balanceData.source}
                    />
                </div>
                <div className="radioInput">
                    <div>
                        <input
                            type="radio"
                            name="balanceType"
                            value="income"
                            onChange={onHandleChange}
                        />
                        Income
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="balanceType"
                            value="expance"
                            onChange={onHandleChange}
                        />
                        Expance
                    </div>
                </div>
                <input
                    type="date"
                    value={balanceData.date}
                    name="date"
                    onChange={onHandleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default InputForm;
