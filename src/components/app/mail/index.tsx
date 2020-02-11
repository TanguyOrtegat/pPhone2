import React from "react";

import './Mail.scss'
import { Link } from "react-router-dom";


export interface IMailProps {
    sender?: string,
    topic?: string,
    date?: string,
    notification: boolean,
    content?: string
}

const mailTestList: IMailProps[] = [
    { sender: 'John Doe', topic: 'My First Mail', date: 'Hier', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { sender: 'David Doe', topic: 'My Second Mail', date: 'Vendredi', notification: false, content: 'Bonjour John, j\'ai récuperé le colis que tu m\'as envoyé. Merci beaucoup, cordialement David Doe' },
 
]

const Mail: React.FC = () => {
    const getNotification = (etat: boolean) => {
        if (etat)
        {
            return (
                <div className="mail-notification"></div>
            )
        }
        else
        {
            return (
                <div></div>
            )
        }
    }

    const getMail = () => {
        return mailTestList.map((props) => {
            return (
                <div className="mail-core">
                    {getNotification(props.notification)}
                    <div className="item-mail">
                        <hr/>
                        <div className="item-mail-top">
                            <div id="mail-sender">{props.sender}</div>
                            <div id='mail-date'>{props.date}</div>
                        </div>
                        <div id="mail-topic">{props.topic}</div>
                        <div id="mail-content">{props.content}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="app-container">
            <div className="item-mail-top">
                <a className="arrow left"></a>
                <div id="mail-return">Boîtes</div>
                <div id="mail-modify">Modifier</div>
            </div>
            <h1>Réception</h1>
            <input type="text" className="searchIOS" placeholder="Rechercher"/>
            {getMail()}
            <hr id="mail-last"/>
        </div>
    )
};

export default Mail;
