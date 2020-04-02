import React from "react";

import './Bank.scss'
import HeaderApp from "../../utils/HeaderApp";

const headerColor = "#b30000"

const Bank: React.FC = () => {
    return (
        <div className="app-container">
            <HeaderApp color={headerColor} title="Bank" />

        </div>
    )
};

export default Bank;