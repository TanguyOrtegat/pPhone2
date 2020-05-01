import React, { useState } from "react";
import MicIcon from "../../../assets/icons/mic-slash.svg";
import KeypadIcon from "../../../assets/icons/circle-grid.svg"
import SpeakerIcon from "../../../assets/icons/speaker.svg"
import PlusIcon from "../../../assets/icons/plus.svg"
import FacetimeIcon from "../../../assets/icons/facetime.svg"
import ContactIcon from "../../../assets/icons/person-2.svg"
import RejectIcon from "../../../assets/icons/phone-down.svg";
import { ReactSVG } from "react-svg";

interface CallState {
    mute: boolean
}

const InCallPage: React.FC = prop => {

    const [state, setState] = useState<CallState>({ mute: false });

    const toggleMute = () => setState({ ...state, mute: !state.mute });

    return (
        <div id="call-container">
            <div>
                <h1 className="caller-name">John doe</h1>
                <h2>Phone 00:33</h2>
            </div>
            <div>
                <div className="btn-row">
                    <div className="options-btn" onClick={toggleMute}>
                        <div className={`circle-btn ${state.mute ? "active" : ""}`}>
                            <ReactSVG id="mute-icon" src={MicIcon}></ReactSVG>
                        </div>
                        <h3>Mute</h3>
                    </div>
                    <div className="options-btn">
                        <div className="circle-btn">
                            <ReactSVG id="keypad-icon" src={KeypadIcon}></ReactSVG>
                        </div>
                        <h3>Keypad</h3>
                    </div>
                    <div className="options-btn">
                        <div className="circle-btn">
                            <ReactSVG id="speaker-icon" src={SpeakerIcon}></ReactSVG>
                        </div>
                        <h3>Speaker</h3>
                    </div>
                </div>
                <div className="btn-row">
                    <div className="options-btn">
                        <div className="circle-btn">
                            <ReactSVG id="plus-icon" src={PlusIcon}></ReactSVG>
                        </div>
                        <h3>Add call</h3>
                    </div>
                    <div className="options-btn">
                        <div className="circle-btn">
                            <ReactSVG id="facetime-icon" src={FacetimeIcon}></ReactSVG>
                        </div>
                        <h3>Facetime</h3>
                    </div>
                    <div className="options-btn">
                        <div className="circle-btn">
                            <ReactSVG id="contact-icon" src={ContactIcon}></ReactSVG>
                        </div>
                        <h3>Contacts</h3>
                    </div>
                </div>
            </div>
            <div className="btn-row">
                <div className="options-btn">
                    <div id="reject-btn" className="circle-btn">
                        <ReactSVG id="reject-icon" src={RejectIcon}></ReactSVG>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InCallPage;
