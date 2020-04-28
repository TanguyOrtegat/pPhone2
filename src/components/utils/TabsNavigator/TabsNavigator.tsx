import React from "react";
import "./TabsNavigator.scss";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

export interface ITab {
    name: string,
    icon: string,
    route: string,
    exactRoute: boolean
}

interface ITabsNavigatorProps {
    tabs: ITab[]
};

const TabsNavigator: React.FC<ITabsNavigatorProps> = (props: ITabsNavigatorProps) => {

    const getLink = (tab: ITab) => {
        return (
            <NavLink key={tab.name} className="nav-link" to={tab.route} exact={!!tab.exactRoute}>
                <div className="icon-container">
                    <ReactSVG className="icon" src={tab.icon} />
                </div>
                <div>{tab.name}</div>
            </NavLink >
        )
    }

    return (
        <div>
            <nav>
                {props.tabs.map(tab => getLink(tab))}
            </nav>
        </div>

    );
};

export default TabsNavigator;