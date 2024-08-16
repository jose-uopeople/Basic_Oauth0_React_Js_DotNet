import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication-guard";
import { PageLoader } from "./components/page-loader";
import About from './components/About';
import Loading from './components/Loading';
import WeatherForecastPage from './components/WeatherForecastPage';


export const App = () => {

    return (
        <div>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/weatherforecastpage">Weather Forecast</Link><br />

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/callback" element={<Loading />} />
                <Route
                    path='/weatherforecastpage'
                    element={<AuthenticationGuard component={WeatherForecastPage} />}
                />
            </Routes>
        </div>
    );
};