import React from "react";

import './MessageItem.scss'
import { ReactSVG } from "react-svg";
import BackIcon from '../../../assets/icons/back_right.svg'
import { IMailProps } from ".";

const Message: React.FC<IMailProps> = (props: IMailProps) => {
  return (
    <div className={`mail-core ${props.edit ? "edit" : ""}`}>
        <div className="notif-container">
            {props.notification ? <div className={`mail-notification ${props.edit ? "edit" : ""}`}></div> : false}
        </div>
      <div className="item-mail">
        <div className="item-mail-top">
          <span id="mail-sender">{props.sender}</span>
          <div className="item-mail-top-right">
            <span id="mail-date">{props.date}</span>
            <ReactSVG
              beforeInjection={svg => {
                svg.setAttribute("width", "8px");
                svg.setAttribute("height", "8px");
              }}
              src={`${BackIcon}`}
              fallback={() => <span>Error!</span>}
              className="item-mail-top-arrow"
            />
          </div>
        </div>
        {props.topic ? <div id="mail-topic">{props.topic}</div> : false }
        <div id="mail-content">{props.content}</div>
      </div>
    </div>
  );
};

export default Message;
