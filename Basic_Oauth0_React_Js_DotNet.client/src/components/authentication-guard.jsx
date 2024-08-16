import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Loading from './Loading';

// eslint-disable-next-line react/prop-types
export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <Loading />
            </div>
        ),
    });

    return <Component />;
};