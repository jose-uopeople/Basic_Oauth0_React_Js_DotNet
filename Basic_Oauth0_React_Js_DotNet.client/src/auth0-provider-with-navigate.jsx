import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();

    const domain = "dev-32653986.us.auth0.com";
    const clientId = "JOhu9BjADXpjtZPL03cUl9NxBfRQzFMp";
    const redirectUri = "https://localhost:5173/callback";

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};