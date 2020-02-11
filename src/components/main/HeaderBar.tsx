import React from "react";

import './HeaderBar.scss'

import battery from '../../assets/icons/battery.png'
import wifi from '../../assets/icons/wifi.png'
import service from '../../assets/icons/service.png'
import location from '../../assets/icons/location.png'

// TODO: We need to do something dynamic for the color of the header, as if the background is too light
// it would be hard to read the text and the icons, we also should switch to black when using a "light theme" app

type ClockState = {
    time: Date
}
  
export class TimeActually extends React.Component<{}, ClockState> {
  
    tick() {
      this.setState({
        time: new Date()
      });
    }
  
    componentWillMount() {
      this.tick();
    }
  
    componentDidMount() {
      setInterval(() => this.tick(), 1000);
    }
  
    render() {
      return <span className="phone-header-time">{this.state.time.getHours()}:{this.state.time.getMinutes()}</span>
    }
  }

export const HeaderBar: React.FC = () => {
    return (
        <div className="phone-header">
            <div className="phone-header-left">
                <TimeActually/>
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
