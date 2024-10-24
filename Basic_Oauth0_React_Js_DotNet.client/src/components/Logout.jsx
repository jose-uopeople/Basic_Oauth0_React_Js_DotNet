import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Logout() {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: "https://localhost:5173/"
            }
        });
    };

    return (
        <button className="button__logout" onClick={handleLogout}>
            Log Out
        </button>
    );
}

export default Logout;