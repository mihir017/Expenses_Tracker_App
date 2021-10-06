import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import "./app.css";
import SignUp from "./Authentication/SignUp";

const App = () => {
    return (
        <>
            <Router>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Router>
        </>
    );
};

export default App;
