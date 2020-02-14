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
    let etatEdit = false;

    const getNotification = (etat: boolean) => {
        if (etat)
            return (<div className="mail-notification"></div>)
        else
            return (<div></div>)
    }


    const goHome = () => {
        etatEdit = false;
        props.history.push('/')
    }

    const edit = () => {
        let elem: HTMLCollectionOf<Element> = document.getElementsByClassName('mail-core') as HTMLCollectionOf<Element>;
        let last: HTMLElement = document.getElementById('lastDiv') as HTMLElement;
        let notification: HTMLCollectionOf<Element> = document.getElementsByClassName('mail-notification') as HTMLCollectionOf<Element>;
        if (etatEdit == false)
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
    }

    const getMail = () => {
        return mailTestList.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <div className="mail-core">
                        {getNotification(item.notification)}
                        <div className="item-mail">
                            <div className="item-mail-top">
                                <div id="mail-sender">{item.sender}</div>
                                <div id='mail-date'>{item.date}</div>
                            </div>
                            <a className="arrowDate"></a>
                            <div id="mail-topic">{item.topic}</div>
                            <div id="mail-content">{item.content}</div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    return (
        <React.Fragment>
            <div className="item-mail-top">
                <a className="arrow left" onClick={goHome}></a>
                <div id="mail-return" onClick={goHome}>Personal</div>
                <div id="mail-modify" onClick={edit}>Edit</div>
            </div>
            <h1>Inbox</h1>
            <input type="text" className="searchIOS" placeholder="Search"/>
            {getMail()}
            <div className="item-mail" id='lastDiv'></div>
        </React.Fragment>
    )
};

export default Mail;
