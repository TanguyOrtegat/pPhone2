import React from "react";

import './BottomPhoneNavigator.scss'

import home from './assets/home.png'
import more from './assets/more.png'
import back from './assets/back.png'
import { RouteProps } from "react-router-dom";

export const BottomPhoneNavigator: React.FC = (props: any) => {
    const goBack = () => {
        props.history.goBack()
    }

    const goHome = () => {
        props.history.push('/')
    }

    return (
        <div className="bottom-phone-container">
            <div className="bottom-phone-button-container">
                <div className="bottom-phone-button">
                    <div className="bottom-phone-button-content">Apps</div>
                </div>
                <div className="bottom-phone-button" onClick={goHome}>
                    <div className="bottom-phone-button-content">Home</div>
                </div>
                <div className="bottom-phone-button" onClick={goBack}>
                    <div className="bottom-phone-button-content">Back</div>
                </div>
            </div>
        </div>
    )
};
