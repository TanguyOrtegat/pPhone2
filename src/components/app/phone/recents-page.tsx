import React, { useState } from 'react';
import './Phone.scss';
import { ReactSVG } from 'react-svg';
import OutgoingIcon from '../../../assets/icons/outgoing-call.svg';
import MinusIcon from '../../../assets/icons/minus-circle.svg';
import HeaderApp from '../../utils/HeaderApp';

interface ICall {
    id: number,
    name: string,
    type: string,
    date: string,
    outgoing: boolean,
    missed: boolean
}

const defaultCalls: ICall[] = [
    { id: 1, name: "John Doe", type: "Phone", outgoing: true, date: '12:04', missed: false },
    { id: 2, name: "555 45653", type: "Mobile", outgoing: false, date: 'Yesterday', missed: true },
    { id: 3, name: "555 45201", type: "Phone", outgoing: false, date: '25/07', missed: false },
    { id: 4, name: "Ruben Taylor", type: "Phone", outgoing: true, date: '14/07', missed: false },
    { id: 5, name: "Ruben Taylor", type: "Phone", outgoing: false, date: '14/07', missed: false },
    { id: 6, name: "John Doe", type: "Facetime", outgoing: false, date: '10/07', missed: true }
];

interface PageState {
    deleteMode: boolean,
    onlyMissed: boolean,
    calls: ICall[]
};

const RecentsPage: React.FC = () => {

    const [state, SetState] = useState<PageState>({ deleteMode: false, calls: defaultCalls, onlyMissed: false });

    const removeCall = (id: number) => SetState({ ...state, calls: state.calls.filter(call => call.id != id) });
    const removeAllCalls = () => SetState({ ...state, deleteMode: false, calls: [] });
    const toggleOnlyMissed = () => SetState({ ...state, onlyMissed: !state.onlyMissed });
    const toggleDeleteMode = () => SetState({ ...state, deleteMode: !state.deleteMode });

    const getCalls = () => state.calls
        .filter(call => call.missed || !state.onlyMissed)
        .map(call => <Call key={call.id} {...call} deleteMode={state.deleteMode} onCallDeleted={() => removeCall(call.id)} />);

    return (
        <div id="recents-page">
            <HeaderApp leftText={state.deleteMode ? "clear" : ""} leftOnClick={state.deleteMode ? removeAllCalls : undefined} 
                rightText={state.deleteMode ? "Done" : "Edit"} rightOnClick={toggleDeleteMode} noBorder={true}
            >
                <div className="call-filter">
                    <div className={`call-filter-btn ${state.onlyMissed ? "" : "active"}`} onClick={toggleOnlyMissed}>All</div>
                    <div className={`call-filter-btn ${state.onlyMissed ? "active" : ""}`} onClick={toggleOnlyMissed}>Missed</div>
                </div>
            </HeaderApp>
            <div className="page-container">
                <h1 className="page-title">Recents</h1>
                <ul id="recents-list" className="list-view">{getCalls()}</ul>
            </div>
        </div>
    );
};

interface ICallProps extends ICall {
    deleteMode: boolean,
    onCallDeleted: () => void
}

const Call: React.FC<ICallProps> = (props: ICallProps) => {

    const [deleting, setDeleting] = useState(false);

    if (!props.deleteMode && deleting) {
        setDeleting(false);
    }

    const onDeleteClicked = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
        props.onCallDeleted();
    }

    return (
        <li className={props.deleteMode && deleting ? "deleting" : ""} onClick={() => deleting && setDeleting(false)}>
            {props.deleteMode && <div onClick={() => setDeleting(true)}><ReactSVG className="minus-icon" src={MinusIcon}></ReactSVG></div>}
            <div className="left-icon-container">
                {props.outgoing && <ReactSVG src={OutgoingIcon} className="outgoing-icon" />}
            </div>
            <div className="informations">
                <h3 className={props.missed ? "missed" : ""}>{props.name}</h3>
                <h4 className="text-light">{props.type}</h4>
            </div>
            <div className="text-light details">{props.date}</div>
            <div className={`confirm-delete-btn ${props.deleteMode && deleting && "delete-btn-displayed"}`} onClick={onDeleteClicked}>Delete</div>
        </li >
    );
}

export default RecentsPage;