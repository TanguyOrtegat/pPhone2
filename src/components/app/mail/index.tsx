import React, { useState } from "react";

import './Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message from "../../utils/MessageItem/MessageItem";
import AppContainer from "../../utils/AppContainer";

export interface IMailProps {
    id: number,
    title: string,
    topic?: string,
    date?: string,
    notification: boolean,
    content: string,
    edit?: boolean
}

const mailTestList: IMailProps[] = [
    { id: 1, title: 'John Doe', topic: 'My First Mail', date: 'Yesterday', notification: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo dapibus, accumsan lorem eleifend, pharetra quam. Quisque vestibulum commodo justo, eleifend mollis enim blandit eu. Aenean hendrerit nisl et elit maximus finibus. Suspendisse scelerisque consectetur nisl mollis scelerisque.' },
    { id: 2, title: 'David Doe', topic: 'My Second Mail', date: 'Friday', notification: false, content: 'Hello John, I got the package you sent me yesterday. Thank you for that, David.' },
 
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
        <AppContainer>
            <HeaderApp title="Inbox" leftText="Personal" leftOnClick={() => setEdit(!edit)} rightText="Edit" />
            <div className="mail-box">
                {getMail()}
            </div>
        </AppContainer>
    )
};

export default Mail;
