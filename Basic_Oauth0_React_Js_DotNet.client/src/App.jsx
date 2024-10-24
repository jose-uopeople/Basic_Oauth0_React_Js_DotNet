import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Routes from './components/Routes';

export const App = () => {

    return (
        <>
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/weatherforecastpage">Weather Forecast</Link><br />
                <Link to="/logout">Logout</Link><br />
            </div>
            <Routes />
        </>
    );
};