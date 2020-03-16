import React from "react";
import './HeaderApp.scss'
import { ReactSVG } from "react-svg";

import BackIcon from '../../../assets/icons/back.svg'
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface IHeaderAppProps extends RouteComponentProps {
    onClickOnArrow?: (args0: any) => void,

    onClickOnLeftText?: (args0: any) => void,
    onClickOnRightText: (args0: any) => void,
    leftText?: string,
    rightText: string,
    color?: string,

    title?: string,
    titleColor?: string
}

const HeaderApp: React.FC<IHeaderAppProps> = (props: IHeaderAppProps) => {
    const headerColor = props.color || "#397fda";
    const titleColor = props.titleColor || "black";

    const goBack = () => {
        props.history.goBack()
    }

    return (
        <div className="header-app" style={{ color: headerColor }}>
            <ReactSVG onClick={props.onClickOnArrow || goBack} src={`${BackIcon}`} fallback={() => <span>Error!</span>} className="header-app-arrow" style={{ fill: headerColor }} />
            {props.onClickOnLeftText && props.leftText && <div className="header-app-left-text" onClick={props.onClickOnLeftText}>{props.leftText}</div>}

            {props.title && <span className="header-app-title" style={{ color: titleColor }}>{props.title}</span>}
            <div className="header-app-right-text" onClick={props.onClickOnRightText}>{props.rightText}</div>
        </div>
    )
}

export default withRouter(HeaderApp);