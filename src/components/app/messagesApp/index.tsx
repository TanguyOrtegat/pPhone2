import React from "react";

import './MessageApp.scss'
import HeaderApp from "../../utils/HeaderApp";
import {currentMessage} from "../messages";
import AppContainer from "../../utils/AppContainer";


const MessagesApp: React.FC = (props: any) => {
    const displayMyMessageApp = () => {
        return currentMessage.messages.map((item:any) => {

            return <React.Fragment>
                <div className={"message ".concat(item.sender)}>{item.message}</div>
            </React.Fragment>
        })
    };

    return (
        <AppContainer>
                <HeaderApp title={currentMessage.sender} leftText="Messages" rightText="Supprimer" onClickOnLeftText={() => {}} onClickOnRightText={()=>{}}/>

            <div className="messages-wrapper">
                {displayMyMessageApp()}
                <div className="send-container">
                    <form id="send">
                        <label>
                            <input type="text" onChange={()=>{}} id="msgInput" className="send-input" placeholder="Message"/>
                        </label>
                        <input type="submit" onClick={()=>{}} className="send-btn" value="Envoyer"/>
                    </form>
                </div>
            </div>

            </AppContainer>
    )
};

export default MessagesApp;
