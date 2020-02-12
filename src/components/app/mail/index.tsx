import React from "react";

import './Mail.scss'

export interface IMailProps {
    id?: string,
    sender?: string,
    topic?: string,
    date?: string,
    notification: boolean,
    content?: string
}

const mailTestList: IMailProps[] = [
    { id: "1", sender: 'John Doe', topic: 'My First Mail', date: 'Yesterday', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { id: "2", sender: 'David Doe', topic: 'My Second Mail', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
 
]

const Mail: React.FC = (props: any) => {
    const getNotification = (etat: boolean) => {
        if (etat)
            return (<div className="mail-notification"></div>)
        else
            return (<div></div>)
    }

    const print = () => {
        console.log("test");
    }

    const goHome = () => {
        props.history.push('/')
    }

    const getMail = () => {
        return mailTestList.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <div className="mail-core" onClick={print}>
                        {getNotification(item.notification)}
                        <div className="item-mail">
                            <hr/>
                            <div className="item-mail-top">
                                <div id="mail-sender">{item.sender}</div>
                                <div id='mail-date'>{item.date}</div>
                            </div>
                            <div id="mail-topic">{item.topic}</div>
                            <div id="mail-content">{item.content}</div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    return (
        <div className="app-container" >
            <div className="item-mail-top">
                <a className="arrow left"></a>
                <div id="mail-return">Personal</div>
                <div id="mail-modify">Edit</div>
            </div>
            <h1>Inbox</h1>
            <input type="text"  className="searchIOS" placeholder="Search"/>
            {getMail()}
            <hr id="mail-last"/>
        </div>
    )
};

export default Mail;
