import React from "react";
import "./sidebar.css";

function Sidebar() {
    const items = ["Welcome", "About", "Features", "Download"];

    const renderItems = () => {
        return items.map((item) => {
            return (
                <li>
                    <span>{item}</span>
                    <div />
                </li>
            );
        });
    };

    return (
        <div className="sidebar">
            <ul>{renderItems()}</ul>
        </div>
    );
}
export default Sidebar;
