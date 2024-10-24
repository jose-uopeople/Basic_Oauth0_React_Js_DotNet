import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticationGuard } from "./authentication-guard";

import About from '../components/About';
import WeatherForecastPage from '../components/WeatherForecastPage';
import Loading from '../components/Loading';
import Logout from '../components/Logout';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/callback" element={<Loading />} />
            <Route
                path='/weatherforecastpage'
                element={<AuthenticationGuard component={WeatherForecastPage} />}
            />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
};

export default AppRoutes;