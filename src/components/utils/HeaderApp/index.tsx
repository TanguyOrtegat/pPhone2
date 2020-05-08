import React from "react";
import "./HeaderApp.scss";
import { ReactSVG } from "react-svg";
import BackIcon from "../../../assets/icons/back.svg";
import Searchbar from "../Searchbar";
import PlusIcon from "../../../assets/icons/plus.svg";

interface IHeaderAppProps {
  title?: string;
  disable?: boolean;
  noBorder?: boolean;
  leftText?: string;
  leftPlusIcon?: boolean;
  leftBackIcon?: boolean;
  leftOnClick?: (args0: any) => void;
  rightText?: string;
  rightPlusIcon?: boolean;
  rightOnClick?: (args0: any) => void;
  onSearchChanged?: (search: string) => void;
}

const HeaderApp: React.FC<IHeaderAppProps> = (props) => {
  return (
    <div id="header-app" className={`${props.noBorder ? "no-border" : ""} ${props.disable ? "disable" : ""}`}>
      <div className="header-row">
        <div className="header-left" onClick={props.disable ? undefined : props.leftOnClick}>
          {props.leftBackIcon && <ReactSVG className="back-icon" src={BackIcon} />}
          {props.leftPlusIcon && <ReactSVG className="plus-icon" src={PlusIcon} />}
          {props.leftText}
        </div>
        <div className="header-middle">{props.title}{props.children}</div>
        <div className="header-right" onClick={props.disable ? undefined : props.rightOnClick}>
          {props.rightText}
          {props.rightPlusIcon && <ReactSVG className="plus-icon" src={PlusIcon} />}
        </div>
      </div>
      {props.onSearchChanged && <Searchbar onSearchChanged={props.onSearchChanged} />}
    </div>
  );
};

export default HeaderApp;
