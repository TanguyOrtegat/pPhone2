import React from "react";

import './MessageItem.scss'
import { ReactSVG } from "react-svg";
import BackIcon from '../../../assets/icons/back_right.svg'

export interface IMessage {
  id: number,
  title: string,
  content: string,
  notification?: boolean,
  date?: string,
  topic?: string,
  edit?: boolean,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>, props: IMessage) => void) | undefined,
}

const Message: React.FC<IMessage> = (props: IMessage) => {
  return (
    <div className={`mail-core ${props.edit ? "edit" : ""}`} onClick={(event) => { if (props.onClick) props.onClick(event, props) }}>
        <div className="notif-container">
            {props.notification ? <div className={`mail-notification ${props.edit ? "edit" : ""}`}></div> : false}
        </div>
      <div className="item-mail">
        <div className="item-mail-top">
          {props.title ? <span id="mail-sender">{props.title}</span> : false}
          <div className="item-mail-top-right">
            {props.date ? <span id="mail-date">{props.date}</span> : false}
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
