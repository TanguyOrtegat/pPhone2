import React from "react";

import { ReactSVG } from 'react-svg'

import './BottomPhoneNavigator.scss'
import BackIcon from '../../assets/icons/back.svg'
import DotIcon from '../../assets/icons/dot.svg'
import AppIcon from '../../assets/icons/app.svg'

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
                    <ReactSVG src={AppIcon} fallback={() => <span>Error!</span>} className="bottom-phone-button-content" />
                </div>
                <div className="bottom-phone-button" onClick={goHome}>
                    <ReactSVG src={DotIcon} fallback={() => <span>Error!</span>} className="bottom-phone-button-content" />
                </div>
                <div className="bottom-phone-button" onClick={goBack}>
                    <ReactSVG src={BackIcon} fallback={() => <span>Error!</span>} className="bottom-phone-button-content" />
                </div>
            </div>
        </div>
    )
};
