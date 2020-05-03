import React from "react";

import './AppItem.scss'

import { Link } from "react-router-dom";
import { iconList } from "../../../const/app";

export interface IAppItemProps {
    name?: string,
    icon: keyof typeof iconList,
    path?: string,
    notifications?: number
}

export const AppItem: React.FC<IAppItemProps> = (props: IAppItemProps) => {
    const appPath = props.path ? `app/${props.path}` : ""

    return (
        <Link to={appPath} className="app-icon">
            {!!props.notifications && <div className="app-notification-badge">{props.notifications}</div>}
            <div className="app-icon-image" style={{ backgroundImage: `url(${iconList[props.icon]})` }} />
            {props.name && <span className="app-text">{props.name}</span>}
        </Link>
    )
};
