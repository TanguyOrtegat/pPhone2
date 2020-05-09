import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { CSSTransitionGroup } from "react-transition-group";
import CircleCheckbox from "../../utils/CircleCheckbox";
import HeaderApp from "../../utils/HeaderApp";

import "./Phone.scss";

import PlayIcon from "../../../assets/icons/play-fill.svg";
import SpeakerIcon from "../../../assets/icons/speaker-2.svg";
import TrashIcon from "../../../assets/icons/trash-fill.svg";
import PhoneIcon from "../../../assets/icons/phone-fill.svg";
import PauseIcon from "../../../assets/icons/pause-fill.svg";

const formatTime = (time: number) => {
  const absTime = Math.abs(time);
  const minutes = Math.floor(absTime / 60);
  const secondes = absTime % 60;

  return `${time < 0 ? "-" : ""}${minutes < 10 ? "0" : ""}${minutes}:${secondes < 10 ? "0" : ""}${secondes}`;
};

interface IVoicemail {
  id: number;
  name: string;
  type: string;
  date: string;
  read: boolean;
  length: number;
  selected: boolean;
}

const defaultVoicemails: IVoicemail[] = [
  { id: 2, name: "555 45653", type: "Mobile", date: "Yesterday", read: false, selected: false, length: 58 },
  { id: 1, name: "John Doe", type: "Phone", date: "12:04", read: true, selected: false, length: 12 },
  { id: 3, name: "555 45201", type: "Phone", date: "25/07/2020", read: true, selected: false, length: 38 },
  { id: 4, name: "Ortega", type: "Phone", date: "14/07/2020", read: true, selected: false, length: 81 },
  { id: 5, name: "Martin Madrazo ", type: "Phone", date: "14/07/2020", read: true, selected: false, length: 46 },
];

interface PageState {
  editMode: boolean;
  playerMailId?: number;
  voicemails: IVoicemail[];
}

const VoicemailPage: React.FC = () => {
  const [state, SetState] = useState<PageState>({ editMode: false, voicemails: defaultVoicemails });

  const toggleEditMode = () => {
    const voicemails = state.editMode
      ? state.voicemails.map((mail) => {
          return { ...mail, selected: false };
        })
      : state.voicemails;
    SetState({ ...state, voicemails: voicemails, editMode: !state.editMode });
  };
  const markSelectedAsRead = () => {
    const voicemails = state.voicemails.map((mail) => {
      return { ...mail, selected: false, read: mail.selected || mail.read };
    });
    SetState({ ...state, voicemails: voicemails, editMode: false });
  };
  const deleteSelected = () => {
    const voicemails = state.voicemails.filter((mail) => !mail.selected);
    SetState({ ...state, voicemails: voicemails, editMode: false });
  };

  const onVoicemailClicked = (id: number) => {
    if (state.editMode) {
      SetState({
        ...state,
        voicemails: state.voicemails.map((mail) => (mail.id == id ? { ...mail, selected: !mail.selected } : mail)),
      });
    } else {
      SetState({
        ...state,
        playerMailId: state.playerMailId ? undefined : id,
        voicemails: state.voicemails.map((mail) => {
          return { ...mail, read: mail.id == id || mail.read };
        }),
      });
    }
  };

  const onVoicemailDelete = (id: number) => {
    SetState({ ...state, voicemails: state.voicemails.filter((mail) => mail.id != id), playerMailId: undefined });
  };

  const selectedItems = state.voicemails.filter((mail) => mail.selected);
  const hasSelectedItems = selectedItems.length > 0;
  const hasUnreadSelectedItems = selectedItems.filter((mail) => !mail.read).length > 0;

  const getVoiceMails = () => {
    return state.voicemails.map((mail) => (
      <Voicemail
        key={mail.id}
        {...mail}
        editMode={state.editMode}
        showPlayer={state.playerMailId == mail.id}
        onVoicemailClicked={() => onVoicemailClicked(mail.id)}
        onDeleteVoicemail={() => onVoicemailDelete(mail.id)}
      />
    ));
  };

  return (
    <div id="voicemail-page">
      <HeaderApp
        title="Voicemail"
        leftText="Greeting"
        rightText={state.editMode ? "Done" : "Edit"}
        rightOnClick={toggleEditMode}
        disable={state.playerMailId != undefined}
      />
      <div className="page-container">
        <ul id="voicemail-list" className={`list-view ${state.playerMailId != undefined ? "has-player" : ""}`}>
          <CSSTransitionGroup
            transitionName="voicemail-transition"
            transitionEnter={false}
            transitionLeaveTimeout={300}
          >
            {getVoiceMails()}
          </CSSTransitionGroup>
        </ul>
      </div>
      {state.editMode && (
        <div id="voicemail-options">
          <div onClick={markSelectedAsRead} className={hasUnreadSelectedItems ? "enable" : ""}>
            Mark as read
          </div>
          <div onClick={deleteSelected} className={hasSelectedItems ? "enable" : ""}>
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

interface IVoicemailProps extends IVoicemail {
  editMode: boolean;
  showPlayer: boolean;
  onVoicemailClicked: () => void;
  onDeleteVoicemail: () => void;
}

const Voicemail: React.FC<IVoicemailProps> = (props: IVoicemailProps) => {
  return (
    <li
      onClick={props.onVoicemailClicked}
      className={`${props.selected ? "selected" : ""} ${props.showPlayer ? "player" : ""}`}
    >
      {props.editMode && <CircleCheckbox checked={props.selected} />}
      <div className="left-icon-container">
        {!props.read && !props.editMode && <div className="notification"></div>}
      </div>
      <div className="voicemail-container">
        <div className="voicemail-details">
          <div className="informations">
            <h3>{props.name}</h3>
            <h4 className="text-light">{props.type}</h4>
          </div>
          <div className="details">
            <h3 className="font-lighter">{props.date}</h3>
            <h4 className="text-light">{!props.showPlayer && formatTime(props.length)}</h4>
          </div>
        </div>
        {props.showPlayer && <VoiceMailPlayer onDeleteClicked={props.onDeleteVoicemail} length={props.length} />}
      </div>
    </li>
  );
};

const VoiceMailPlayer: React.FC<{ onDeleteClicked: () => void; length: number }> = (props) => {
  const [state, setState] = useState({ playing: false, position: Math.round(Math.random() * props.length) });

  const onPlayPauseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setState({ ...state, playing: !state.playing });
  };

  const onSpeakerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onCallClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    props.onDeleteClicked();
  };

  return (
    <React.Fragment>
      <div className="player-line">
        <div
          className="player-line-progress"
          style={{ width: Math.round((state.position * 100) / props.length) + "%" }}
        />
        <div className="player-circle" />
      </div>
      <div className="player-timing">
        <h5>{formatTime(state.position)}</h5>
        <h5>{formatTime(state.position - props.length)}</h5>
      </div>
      <div className="player-btn">
        <div onClick={onPlayPauseClick}>
          <ReactSVG id="play-icon" src={state.playing ? PlayIcon : PauseIcon} />
        </div>
        <div id="speaker-btn" className="circle-btn" onClick={onSpeakerClick}>
          <ReactSVG src={SpeakerIcon} />
        </div>
        <div id="call-btn" className="circle-btn" onClick={onCallClick}>
          <ReactSVG src={PhoneIcon} />
        </div>
        <div id="delete-btn" className="circle-btn" onClick={onDeleteClick}>
          <ReactSVG src={TrashIcon} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default VoicemailPage;
