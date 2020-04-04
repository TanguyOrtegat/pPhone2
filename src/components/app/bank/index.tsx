import React from "react";

import './Bank.scss'
import HeaderApp from "../../utils/HeaderApp";
import AppContainer from "../../utils/AppContainer";

const headerColor = "#b30000"

const Bank: React.FC = () => {
    return (
        <AppContainer>
            <HeaderApp color={headerColor} title="Bank" />

        </AppContainer>
    )
};

export default Bank;