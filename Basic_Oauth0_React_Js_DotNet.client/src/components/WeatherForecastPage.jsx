import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import '../App.css';

function WeatherForecastPage() {
    const { user } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    const [forecasts, setForecasts] = useState();

    if (!user) {
        return null;
    }

    populateWeatherData();

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="userName">User Name: {user.name}</h1>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {

        const accessToken = await getAccessTokenSilently();

        const response = await fetch('weatherforecast', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        const data = await response.json();
        setForecasts(data);
    }
}

export default WeatherForecastPage;