import React, { useState } from "react";
import InputField from "../InputField";
import "./authentication.css";
import { StoreUserAccounts } from "../Hook/LocalStorage";

const SignUp = () => {
    const [userDetail, setUserDetail] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [msg, setMsg] = useState("");

    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setUserDetail((prevDetail) => {
            return { ...prevDetail, [name]: value };
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const msg = StoreUserAccounts(userDetail);
        // msg === " ";
        setUserDetail({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="container">
            <h2 className="formTitle">Sign UP Here</h2>
            <form onSubmit={onHandleSubmit} className="authForm">
                <InputField
                    type="text"
                    value={userDetail.userName}
                    name="userName"
                    placeholder="Enter UserName"
                    onChange={onHandleChange}
                />
                <InputField
                    type="email"
                    value={userDetail.email}
                    name="email"
                    placeholder="Enter Email"
                    onChange={onHandleChange}
                />
                <InputField
                    type="password"
                    value={userDetail.password}
                    name="password"
                    placeholder="Enter Password"
                    onChange={onHandleChange}
                />
                <InputField
                    type="password"
                    value={userDetail.confirmPassword}
                    name="confirmPassword"
                    placeholder="Enter confirmPassword"
                    onChange={onHandleChange}
                />
                <button type="submit" className="btn authBtn">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignUp;
