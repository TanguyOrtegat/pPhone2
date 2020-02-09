import React from "react";

import './BottomAppNavigator.scss'
import { AppItem } from "../home/appitem";

export const BottomAppNavigator: React.FC = () => {
    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-list">
                <div className="bottom-nav-list-container">
                    <AppItem icon='facebook'/>
                    <AppItem icon='instagram'/>
                    <AppItem icon='messages'/>
                    <AppItem icon='messenger'/>
                </div>
            </div>
        </div>
    )
};
