import React, { useState } from "react";

import './Messages.scss'
import './../mail/Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message from "../mail/MessageItem";
import { IMailProps } from "../mail";
import AppContainer from "../../utils/AppContainer";
import {Link} from "react-router-dom";
import {ReactSVG} from "react-svg";
import BackIcon from '../../../assets/icons/back_right.svg'
// TODO:
// Switch app-container to a new component that can takes color props
var currentMessage:any;
export interface IMessagesProps {
    id?: string,
    sender?: string,
    messages?: Array<any>,
    notification: boolean,
    date: string
}

const messageList: IMessagesProps[] = [
    { id: "1", sender: 'John', date: '04:38', notification: true,  messages: [{sender:'from',message:'hello'}, {sender:'to',message:'how are you today?'}] },



];
const Messages: React.FC = (props: any) => {
    let etatEdit = false;

    const getNotification = (etat: boolean) => {
        if (etat)
            return (<div className="messages-notification"></div>)
        else
            return (<div></div>)
    }


    const edit = () => {
        let elem: HTMLCollectionOf<Element> = document.getElementsByClassName('message-core') as HTMLCollectionOf<Element>;
        let last: HTMLElement = document.getElementById('lastDiv') as HTMLElement;
        let notification: HTMLCollectionOf<Element> = document.getElementsByClassName('message-notification') as HTMLCollectionOf<Element>;
        if (!etatEdit)
        {
            for (let item of elem) {
                item.setAttribute("style", "padding-left: 20px;");
            }
            for (let item of notification) {
                item.setAttribute("style", "opacity: 0; transition: 0.3s;");
            }
            last.setAttribute("style", "margin-left: 15%;");
            etatEdit = true;
        }
        else
        {
            for (let item of elem) {
                item.setAttribute("style", "padding-left: 0px;");
            }
            for (let item of notification) {
                item.setAttribute("style", "opacity: 1; transition: 0.3s;");
            }
            last.setAttribute("style", "margin-left: 8%;");
            etatEdit = false;
        }
    };
    const ListMessage = (s:any) => {
        var m:string = "x";
        for (let item of s) {
            m = item.message
        }

        return m
    };
    const Getfirstchar = (s:any) => {
        return s.charAt(0)
    };
    const setCurrentMessage= (s:any) => {
        currentMessage = {
            sender: s.sender,
            messages: s.messages
        }
    };
    const getMessages = () => {
        return messageList.map((item) => {

            return <React.Fragment key={item.id}>
                <div className="messages" onClick={() => {
                    setCurrentMessage(item);
                }}>
                    {/*getNotification(item.notification)*/}
                    <Link to="/app/messagesApp" >
                        <div className="item-message">
                            <div className="item-message-top">
                                <span className="dot"><p>{Getfirstchar(item.sender)}</p></span>
                                <span id="message-sender">{item.sender}</span>
                                <div className="item-message-top-right">
                                    <span id='message-date'>{item.date}</span>
                                    <ReactSVG beforeInjection={(svg) => {
                                        svg.setAttribute('width', '8px');
                                        svg.setAttribute('height', '8px')
                                    }} src={`${BackIcon}`} fallback={() => <span>Error!</span>}
                                              className="item-message-top-arrow"/>
                                </div>
                            </div>
                            <div id="message-content">{ListMessage(item.messages)}</div>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        })
    };

    return (
        <AppContainer>
            <HeaderApp title="Messages" leftText="Edit" rightText="Write" onClickOnLeftText={() => {}} onClickOnRightText={edit} />
            {getMessages()}
        </AppContainer>
    )
};

export default Messages;

export { currentMessage };