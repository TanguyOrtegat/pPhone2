import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { ReactSVG } from "react-svg";

import './HeaderBar.scss'

import LocationIcon from '../../assets/icons/location.svg'
import ServiceIcon from '../../assets/icons/signal.svg';
import WifiIcon from '../../assets/icons/wifi.svg';
import BatteryIcon from '../../assets/icons/battery.svg'

const CurrentTime: React.FC = () => {
  const [date, setDate] = useState(new Date());
  let dateInterval: number;

  const updateDate = () => setDate(new Date());

  useEffect(() => {
    dateInterval = setInterval(updateDate, 10000)
    return () => {
      if (dateInterval)
        clearInterval(dateInterval)
    };
  }, [])

  return (
    <div className="phone-header-time">
      {date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}
    </div>
  )
}

const HeaderBarComponent: React.FC = (props: any) => {
  const { history } = props;
  const [lightHeader, setLightHeader] = useState(false);

  useEffect(() => setLightHeader(!history.location.pathname.startsWith('/app') || history.location.pathname == "/app/calculator"), [history.location.pathname])

  return (
    <div className={`phone-header ${lightHeader ? "phone-header-light" : "phone-header-dark"}`}>
      <div className="phone-header-left">
        <CurrentTime />
        <ReactSVG className="phone-header-icon" src={LocationIcon} />
      </div>
      <div className="phone-header-right">
        <ReactSVG className="phone-header-icon" src={ServiceIcon} />
        <ReactSVG className="phone-header-icon" src={WifiIcon} />
        <ReactSVG className="phone-header-icon" src={BatteryIcon} />
      </div>
    </div>
  )
};

export const HeaderBar = withRouter(HeaderBarComponent);