import React, { useState } from "react";

import './Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message from "./MessageItem";

// TODO:
// Switch app-container to a new component that can takes color props

export interface IMailProps {
    id?: string,
    sender?: string,
    topic?: string,
    date?: string,
    notification: boolean,
    content?: string,
    edit?: boolean
}

const mailTestList: IMailProps[] = [
    { id: "1", sender: 'John Doe', topic: 'My First Mail', date: 'Yesterday', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { id: "2", sender: 'David Doe', topic: 'My Second Mail', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
 
]

const Mail: React.FC = (props: any) => {
    const [edit, setEdit] = useState(false);

    const getMail = () => {
        return mailTestList.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <Message {...item} edit={edit} />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="app-container">
            <HeaderApp title="Inbox" leftText="Personal" rightText="Edit" onClickOnLeftText={() => setEdit(!edit)} onClickOnRightText={() => {}} />
            <div className="mail-box">
                {getMail()}
            </div>
        </div>
    )
};

export default Mail;
