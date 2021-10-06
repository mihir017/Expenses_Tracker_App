import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import InputField from "../InputField";
import "./authentication.css";
import { StoreUserAccounts } from "../Hook/LocalStorage";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [userDetail, setUserDetail] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const history = useHistory();
    const [msg, setMsg] = useState("");

    useEffect(() => {
        // setTimeout(() => {
        //     setMsg("");
        // }, 1500);
        if (msg === "success" && msg) {
            setTimeout(() => {
                setMsg("");
                history.push("/signin");
            }, 1500);
        } else {
            setTimeout(() => {
                setMsg("");
            }, 1500);
        }
    }, [msg, history]);

    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setUserDetail((prevDetail) => {
            return { ...prevDetail, [name]: value };
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        userDetail.password === userDetail.confirmPassword
            ? setMsg(StoreUserAccounts(userDetail))
            : setMsg("errPassword");
        // setTimeout(() => {
        //     history.push("/signin");
        // }, 2000);
        setUserDetail({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };
    const renderMsg = (msg) => {
        if (msg === "success") {
            return "SuccessFully Create Account 👍";
        } else if (msg === "error") {
            return "Email alreay Exists 👎";
        } else if (msg === "errPassword") {
            return "ConfirmPassword Doesn't Match 👎";
        }
    };

    return (
        <div className="container">
            <p className={`msg ${msg}`}>{msg && renderMsg(msg)}</p>
            {/* {renderMsg(msg)} */}
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
            <p className="lastMsg">
                Already User ? Go to{" "}
                <Link to="/signin" className="authRouter">
                    Sign In Page
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
