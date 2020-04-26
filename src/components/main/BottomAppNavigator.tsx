import React from "react";

import './BottomAppNavigator.scss'
import { AppItem } from "../home/appitem";
import { bottomApplicationList } from "../../const/app";

export const BottomAppNavigator: React.FC = () => {
    const getApplications = () => {
        return bottomApplicationList.map((e, key) => {
            return <AppItem key={key} icon={e.icon} path={e.path} notifications={e.notifications} />
        })
    }

    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-list">
                <div className="bottom-nav-list-container">
                    {getApplications()}
                </div>
            </div>
        </div>
    )
};
