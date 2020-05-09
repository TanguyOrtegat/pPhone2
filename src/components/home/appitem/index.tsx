import React from "react";

import "./AppItem.scss";

import { Link } from "react-router-dom";
import { iconList } from "../../../const/app";

export interface IAppItemProps {
  name?: string;
  icon: keyof typeof iconList | "calendar";
  path?: string;
  notifications?: number;
}

export const AppItem: React.FC<IAppItemProps> = (props: IAppItemProps) => {
  const appPath = props.path ? `app/${props.path}` : "";

  return (
    <Link to={appPath} className="app-icon">
      {!!props.notifications && <div className="app-notification-badge">{props.notifications}</div>}
      {props.icon == "calendar" ? (
        <CalendarIcon />
      ) : (
        <div className="app-icon-image" style={{ backgroundImage: `url(${iconList[props.icon]})` }} />
      )}
      {props.name && <span className="app-text">{props.name}</span>}
    </Link>
  );
};

const CalendarIcon: React.FC = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = new Date().getDay();

  return (
    <div className="app-icon-image icon-calendar">
      <h2>{days[currentDay]}</h2>
      <div>{currentDay}</div>
    </div>
  );
};
