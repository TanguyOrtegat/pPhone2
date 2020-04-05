import React, { useEffect } from "react";

import './Notes.scss'
import HeaderApp from "../../utils/HeaderApp";
import Message, { IMessage } from "../mail/MessageItem";
import { Switch, Route, useParams, useLocation, useHistory, Link, withRouter } from "react-router-dom";
import AppContainer from "../../utils/AppContainer";

interface INote {
    id: number,
    title: string,
    content: string,
}

const defaultNotes: INote[] = [
    { id: 0, title: "Position drogue", content: "X: 0.0 Y: 5462.0 - Direction Sandy Shore, caché dans un buisson." }
]

const NotePage: React.FC<any> = () => {
    let { id } = useParams();
    let note = defaultNotes[Number(id)]

    return (
        <div className="note-write-container">
            <textarea className="note-write-input" />
        </div>        
    )
}

const NoteList: React.FC = (props: any) => {
    const getNotes = () => {
        return defaultNotes.map((value, key) => {
            return (
                <Link key={key} to={`${props.match.path}/${key}`}>
                    <Message {...value} />
                </Link>
            )
        })
    }

    return (
        <React.Fragment>
            {getNotes()}
        </React.Fragment>
    )
}

const Notes: React.FC = (props: any) => {
    console.log(props.location.pathname)
    const writeMode = props.location.pathname !== "/app/notes"

    return (
        <AppContainer backgroundColor="#ffffe6">
            <HeaderApp color="#00000" title="Notes" rightText={!writeMode ? "New" : undefined} onClickOnRightText={() => {}} />
            <Switch>
                <Route exact path={props.match.path} component={NoteList} />
                <Route path={`${props.match.path}/:id`} component={NotePage} />
            </Switch>
        </AppContainer>
    )
};

export default Notes;