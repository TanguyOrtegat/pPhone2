import React from "react";

import './HeaderBar.scss'

import battery from '../../assets/icons/battery.png'
import wifi from '../../assets/icons/wifi.png'
import service from '../../assets/icons/service.png'
import location from '../../assets/icons/location.png'

export const HeaderBar: React.FC = () => {
    return (
        <div className="phone-header">
            <div className="phone-header-left">
                <span className="phone-header-time">16:20</span>
                <div className="phone-header-icon" style={{ backgroundImage: `url(${location})`, float: 'right', width: '8px', marginTop: '2px' }}></div>
            </div>

            <div className="phone-header-right">
                <div className="phone-header-icon" style={{ backgroundImage: `url(${service})` }}></div>
                <div className="phone-header-icon" style={{ backgroundImage: `url(${wifi})` }}></div>
                <div className="phone-header-icon" style={{ backgroundImage: `url(${battery})`, width: '14px' }}></div>
            </div>
        </div>
    )
};
