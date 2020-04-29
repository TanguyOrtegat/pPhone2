import React from "react";
import MessageIcon from "../../../assets/icons/message.svg";
import AlarmIcon from "../../../assets/icons/alarm-fill.svg";
import AnswerIcon from "../../../assets/icons/phone-fill.svg";
import RejectIcon from "../../../assets/icons/phone-down.svg";
import { ReactSVG } from "react-svg";

const AnswerPage: React.FC = prop => {
    return (
        <div id="call-container">
            <div>
                <h1 className="caller-name">John doe</h1>
                <h2>Phone</h2>
            </div>
            <div>
                <div className="answer-btn-row">
                    <div className="btn-container">
                        <ReactSVG className="answer-icon" src={AlarmIcon}></ReactSVG>
                        <h3>Remind me</h3>
                    </div>
                    <div className="btn-container">
                        <ReactSVG className="answer-icon" src={MessageIcon}></ReactSVG>
                        <h3>Message</h3>
                    </div>
                </div>
                <div className="answer-btn-row">
                    <div className="btn-container">
                        <div id="reject-btn" className="circle-btn">
                            <ReactSVG id="reject-icon" src={RejectIcon}></ReactSVG>
                        </div>
                        <h3>Decline</h3>
                    </div>
                    <div className="btn-container">
                        <div id="answer-btn" className="circle-btn">
                            <ReactSVG id="call-icon" src={AnswerIcon}></ReactSVG>
                        </div>
                        <h3>Accept</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerPage;
