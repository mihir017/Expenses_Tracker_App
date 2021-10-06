import React from "react";
import BalanceHistory from "./BalanceHistory";
import DisplayBalance from "./DisplayBalance";
import { BalanceProvider } from "./ExpenceContext";
import Form from "./Form";
import "./app.css";

const Home = () => {
    return (
        <BalanceProvider>
            <div className="display">
                <div className="leftDisplay">
                    <DisplayBalance />
                    <h3>Add Expenses or Income</h3>
                    <Form />
                </div>
                <BalanceHistory />
            </div>
        </BalanceProvider>
    );
};

export default Home;
