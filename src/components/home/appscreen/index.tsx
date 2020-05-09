import React from "react";

import './AppScreen.scss'

import { AppItem } from "../appitem";
import { BottomAppNavigator } from "../../main/BottomAppNavigator";
import { applicationList } from "../../../const/app";

const AppScreen: React.FC = () => {
    const getApplications = () => {
        return applicationList.map((app, index) => {
            return <AppItem key={index} {...app} />
        })
    }

    return (
        <div className="app-screen-background">
            <div className="app-screen">
                <div className="app-screen-container">
                    {getApplications()}
                </div>
            </div>
            <BottomAppNavigator />
        </div>
    )
};

export default AppScreen;