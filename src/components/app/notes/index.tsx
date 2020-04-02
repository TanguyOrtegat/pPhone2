import React from "react";

import './Notes.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message from "../mail/MessageItem";

interface INote {
    title: string,
    content: string,
}

const defaultNotes: INote[] = [
    { title: "Position drogue", content: "X: 0.0 Y: 5462.0 - Direction Sandy Shore, caché dans un buisson." }
]

const Notes: React.FC = () => {
    const getNotes = () => {
        return defaultNotes.map((value, key) => {
            return (
                <React.Fragment key={key}>
                    <Message {...value} />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="app-container">
            <HeaderApp color="#e6b800" title="Notes" leftText="Edit" rightText="New" onClickOnLeftText={() => {}} onClickOnRightText={() => {}} />
            {getNotes()}
        </div>
    )
};

export default Notes;