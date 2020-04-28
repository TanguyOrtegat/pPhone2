import React, { useState } from 'react';
import './Phone.scss';

import CircleEmptyIcon from '../../../assets/icons/circle-empty.svg';
import CircleCheckedIcon from '../../../assets/icons/circle-checked.svg';
import { ReactSVG } from 'react-svg';


interface IVoicemail {
    id: number,
    name: string,
    type: string,
    date: string,
    duration: string,
    read: boolean,
    selected: boolean
}

const defaultVoicemails: IVoicemail[] = [
    { id: 2, name: "555 45653", type: "Mobile", date: 'Yesterday', duration: '00:58', read: false, selected: false },
    { id: 1, name: "John Doe", type: "Phone", date: '12:04', duration: '00:12', read: true, selected: false },
    { id: 3, name: "555 45201", type: "Phone", date: '25/07/2020', duration: '00:36', read: true, selected: false },
    { id: 4, name: "Ortega", type: "Phone", date: '14/07/2020', duration: '01:21', read: true, selected: false },
    { id: 5, name: "Martin Madrazo ", type: "Phone", date: '14/07/2020', duration: '00:46', read: true, selected: false }
];

interface PageState {
    editMode: boolean,
    voicemails: IVoicemail[]
};

const VoicemailPage: React.FC = () => {
    const [state, SetState] = useState<PageState>({ editMode: false, voicemails: defaultVoicemails });

    const toggleEditMode = () => {
        const voicemails = state.editMode ?
            state.voicemails.map(mail => { return { ...mail, selected: false }; })
            : state.voicemails;
        SetState({ ...state, voicemails: voicemails, editMode: !state.editMode });
    }
    const markSelectedAsRead = () => {
        const voicemails = state.voicemails.map(mail => { return { ...mail, selected: false, read: mail.selected || mail.read }; });
        SetState({ ...state, voicemails: voicemails, editMode: false });
    }
    const deleteSelected = () => {
        const voicemails = state.voicemails.filter(mail => !mail.selected);
        SetState({ ...state, voicemails: voicemails, editMode: false });
    }
    const toggleVoicemailSelected = (id: number) => SetState({ ...state, voicemails: state.voicemails.map(mail => mail.id == id ? { ...mail, selected: !mail.selected } : mail) });

    const selectedItems = state.voicemails.filter(mail => mail.selected);
    const hasSelectedItems = selectedItems.length > 0;
    const hasUnreadSelectedItems = selectedItems.filter(mail => !mail.read).length > 0;

    const getVoiceMails = () => {
        return state.voicemails.map(mail => <Voicemail key={mail.id} {...mail} editMode={state.editMode} onVoicemailClicked={() => state.editMode && toggleVoicemailSelected(mail.id)} />);
    };

    return (
        <div>
            <div className="header">
                <div className="header-left">
                    Greeting
                </div>
                <div className="header-middle">
                    Voicemail
                </div>
                <div className="header-right" onClick={toggleEditMode}>{state.editMode ? "Done" : "Edit"}</div>
            </div>
            <div className="page-container">
                <ul className="list-view">{getVoiceMails()}</ul>
            </div>
            {state.editMode && <div id="voicemail-options">
                <div onClick={markSelectedAsRead} className={hasUnreadSelectedItems ? "enable" : ""}>Mark as read</div>
                <div onClick={deleteSelected} className={hasSelectedItems ? "enable" : ""}>Delete</div>
            </div>}
        </div >
    );
};

interface IVoicemailProps extends IVoicemail {
    editMode: boolean,
    onVoicemailClicked: () => void
}

const Voicemail: React.FC<IVoicemailProps> = (props: IVoicemailProps) => {
    return (
        <li onClick={props.onVoicemailClicked} className={props.selected ? "selected" : ""}>
            {props.editMode && !props.selected && <ReactSVG className="circle-icon" src={CircleEmptyIcon} />}
            {props.editMode && props.selected && <ReactSVG className="circle-icon selected" src={CircleCheckedIcon} />}
            <div className="left-icon-container">
                {!props.read && !props.editMode && <div className="notification"></div>}
            </div>
            <div className="informations">
                <h3>{props.name}</h3>
                <h4 className="text-light">{props.type}</h4>
            </div>
            <div className="details">
                <h3 className="font-lighter">{props.date}</h3>
                <h4 className="text-light">{props.duration}</h4>
            </div>
        </li >
    );
}

export default VoicemailPage; 