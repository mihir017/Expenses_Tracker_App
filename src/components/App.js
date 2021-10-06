import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import "./app.css";
import SignUp from "./Authentication/SignUp";
import Singin from "./Authentication/SingIn";
import PrivateRoute from "./Authentication/PrivateRoute";

const App = () => {
    return (
        <>
            <Router>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/signin" exact>
                    <Singin />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                {/* <PrivateRoute path="/" exact>
                    <Home />
                </PrivateRoute> */}
            </Router>
        </>
    );
};

export default App;
