import React from "react";
import './AppContainer.scss'

interface IAppContainerProps {
    backgroundColor?: string,
}

const defaultBackgroundColor = "#ffffff"

const AppContainer: React.FC<IAppContainerProps> = (props) => {
    const bgColor = props.backgroundColor || defaultBackgroundColor;

    return (
        <div className="app-container" style={{ backgroundColor: bgColor }}>
            {props.children}
        </div>
    )
}

export default AppContainer;