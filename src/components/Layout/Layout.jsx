import React from "react";
import "../../styles/layout.css";

const Layout = ({ children }) => {
    return (
        <div className="tg-root">
            <div className="tg-shell">
                {children}
            </div>
        </div>
    );
};

export default Layout;
