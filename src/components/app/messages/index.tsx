import React, { useState } from "react";

import './Messages.scss'
import './../mail/Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message from "../../utils/MessageItem/MessageItem";
import { IMailProps } from "../mail";
import AppContainer from "../../utils/AppContainer";
import { Switch, Route, Link } from "react-router-dom";
import { MessagePage } from "./message-page";

const mailTestList: IMailProps[] = [
    { id: 1, title: 'John Doe', date: 'Yesterday', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
    { id: 2, title: '55545856', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
]

const MessageList: React.FC = (props: any) => {
    const getMail = () => {
        return mailTestList.map((item, k) => {
            return (
                <Link key={k} to={`${props.match.path}/${k}`}>
                    <Message {...item} />
                </Link>
            )
        })
    }

    return (
        <div className="mail-box">
            {getMail()}
        </div>
    )
}

const Messages: React.FC = (props: any) => {
    return (
        <AppContainer>
            <HeaderApp title="Messages" rightText="Write" />
            <Switch>
                <Route exact path={props.match.path} component={MessageList} />
                <Route path={`${props.match.path}/:id`} component={MessagePage} />
            </Switch>
        </AppContainer>
    )
};

export default Messages;
