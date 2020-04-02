import React from "react";

import './MessageItem.scss'
import { ReactSVG } from "react-svg";
import BackIcon from '../../../assets/icons/back_right.svg'
import { IMailProps } from ".";

interface IMessage {
  mail: IMailProps,
  edit?: boolean,
  onClick?: Function,
}

const Message: React.FC<IMessage> = (props: IMessage) => {
  return (
    <div className={`mail-core ${props.edit ? "edit" : ""}`}>
        <div className="notif-container">
            {props.mail.notification ? <div className={`mail-notification ${props.edit ? "edit" : ""}`}></div> : false}
        </div>
      <div className="item-mail">
        <div className="item-mail-top">
          <span id="mail-sender">{props.mail.sender}</span>
          <div className="item-mail-top-right">
            <span id="mail-date">{props.mail.date}</span>
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
        {props.mail.topic ? <div id="mail-topic">{props.mail.topic}</div> : false }
        <div id="mail-content">{props.mail.content}</div>
      </div>
    </div>
  );
};

export default Message;
