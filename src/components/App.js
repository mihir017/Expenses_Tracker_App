import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import "./app.css";
import SignUp from "./Authentication/SignUp";
import Singin from "./Authentication/Singin";
import { BalanceProvider } from "./context/ExpenceContext";
// import PrivateRoute from "./Authentication/PrivateRoute";

const App = () => {
    return (
        <BalanceProvider>
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
        </BalanceProvider>
    );
};

export default App;
