import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();

    const domain = "dev-z0qqt6is4oql0yhw.us.auth0.com";
    const clientId = "5uLSp0MbJabmkhlplsm9HxpEDNErfyPU";
    const redirectUri = "https://localhost:5173/callback";
    const audience = "WrapUp.WebAPI";

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};