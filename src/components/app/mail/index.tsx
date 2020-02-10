import React from "react";

import './Mail.scss'


export interface IMailProps {
    sender?: string,
    topic?: string,
    date?: string,
    content?: string
}

const mailTestList: IMailProps[] = [
    { sender: 'John Doe', topic: 'My First Mail', date: 'Hier', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { sender: 'David Doe', topic: 'My Second Mail', date: 'Vendredi', content: 'Bonjour John, j\'ai récuperer le colis que tu m\'as envoyé. Merci beaucoup, cordialement David Doe' },
 
]

const Mail: React.FC = () => {
    const getMail = () => {
        return mailTestList.map((props) => {
            return (
                <div className="item-mail">
                    <hr noshade/>
                    <div className="item-mail-top">
                        <div id="mail-sender">{props.sender}</div>
                        <div id='mail-date'>{props.date}</div>
                    </div>
                    <div id="mail-topic">{props.topic}</div>
                    <div id="mail-content">{props.content}</div>
                </div>
            )
        })
    }

    return (
        <div className="app-container">
            <h1>Réception</h1>
            <input type="text" className="searchIOS" placeholder="Rechercher"/>
            {getMail()}
            <hr id="mail-last"/>
        </div>
    )
};

export default Mail;