import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import InputField from "../InputField";
import "./authentication.css";
import { userSignIn } from "../Hook/LocalStorage";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [signInDetail, setSignInDetail] = useState({
        email: "",
        password: "",
    });
    const history = useHistory();
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (msg === "success" && msg) {
            setTimeout(() => {
                setMsg("");
                history.push("/");
            }, 1500);
        } else {
            setTimeout(() => {
                setMsg("");
            }, 1500);
        }
    }, [msg, history]);

    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setSignInDetail((prevDetail) => {
            return { ...prevDetail, [name]: value };
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setMsg(userSignIn(signInDetail));
        // setTimeout(() => {
        //     history.push("/");
        // }, 2000);
        setSignInDetail({
            email: "",
            password: "",
        });
    };

    return (
        <div className="container">
            <p className={`msg ${msg}`}>
                {msg === "success"
                    ? "SuccessFully Sign In 👍"
                    : "Email or Password is Wrong 👎"}
            </p>
            <h2 className="formTitle">Sign In Here</h2>
            <form onSubmit={onHandleSubmit} className="authForm">
                <InputField
                    type="email"
                    value={signInDetail.email}
                    name="email"
                    placeholder="Enter Email"
                    onChange={onHandleChange}
                />
                <InputField
                    type="password"
                    value={signInDetail.password}
                    name="password"
                    placeholder="Enter Password"
                    onChange={onHandleChange}
                />
                <button type="submit" className="btn authBtn">
                    Sign In
                </button>
            </form>
            <p className="lastMsg">
                New User ?
                <Link to="/signup" className="authRouter">
                    Create Account
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
