import React from "react";
import "../../../styles/layout.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({ children }) => {
    return (
        <div className="tg-root">
            <div className="tg-shell">
                {children}
                <NavigationBar />
            </div>
        </div>
    );
};
export default Layout;
