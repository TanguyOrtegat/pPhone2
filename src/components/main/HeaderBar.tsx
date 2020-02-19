import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

import './HeaderBar.scss'

import battery from '../../assets/icons/battery.png'
import wifi from '../../assets/icons/wifi.png'
import service from '../../assets/icons/service.png'
import location from '../../assets/icons/location.png'

// TODO: Switch icons to SVG to support colors.

const CurrentTime: React.FC = () => {
  const [date, setDate] = useState(new Date());
  let dateInterval: number;

  const updateDate = () => {
    setDate(new Date());
  }

  useEffect(() => {
    dateInterval = setInterval(updateDate, 10000)
    return () => {
      if (dateInterval)
        clearInterval(dateInterval)
    };
  }, [])

  return (
    <span className="phone-header-time">
      {date.getHours()}:{(date.getMinutes()<10 ? '0' : '') + date.getMinutes()}
    </span>
  )
}

const HeaderBarComponent: React.FC = (props: any) => {
    const { history } = props;
    const [color, setColor] = useState("white");

    useEffect(() => {
      if (!history.location.pathname || history.location.pathname === "/")
        setColor("white");
      else
        setColor("black")
    }, [history.location.pathname])

    return (
        <div className="phone-header" style={{ color: color }}>
            <div className="phone-header-left">
                <CurrentTime />
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

export const HeaderBar = withRouter(HeaderBarComponent);