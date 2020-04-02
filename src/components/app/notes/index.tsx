import React from "react";

import './Notes.scss'
import HeaderApp from "../../utils/HeaderApp";

const Notes: React.FC = () => {
    return (
        <div className="app-container">
            <HeaderApp title="Notes" leftText="Edit" rightText="New" onClickOnLeftText={() => {}} onClickOnRightText={() => {}} />

        </div>
    )
};

export default Notes;