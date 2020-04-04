import React, { useState, useEffect, useLayoutEffect } from "react";

import './Camera.scss'
import { withRouter } from "react-router-dom";
import AppContainer from "../../utils/AppContainer";

const Camera: React.FC = (props: any) => {
    return (
        <AppContainer>
            <object type="application/x-cfx-game-view" className="gameview-container" />
            <div className="camera-bottom-nav">
                <div className="camera-nav-buttons">
                    <div className="camera-button-galery" />
                    <div className="camera-button-record" />
                    <div className="camera-button-turn" />
                </div>
            </div>
        </AppContainer>
    )
};

export default withRouter(Camera);