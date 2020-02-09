import React from "react";

import './Camera.scss'

const Camera: React.FC = () => {
    return (
        <div className="app-container">
            <object type="application/x-cfx-game-view" className="gameview-container" />
            <div className="camera-bottom-nav">
                <div className="camera-nav-buttons">
                    <div className="camera-button-galery" />
                    <div className="camera-button-record" />
                    <div className="camera-button-turn" />
                </div>
            </div>
        </div>
    )
};

export default Camera;