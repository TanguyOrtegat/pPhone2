import React, { useState } from "react";

import './Settings.scss'
//import './../mail/Mail.scss'
import HeaderApp from "../../utils/HeaderApp";
import ISettings from "../../utils/SettingsItem/SettingsItem";
import AppContainer from "../../utils/AppContainer";
import { Switch, Route, Link } from "react-router-dom";
//import { MessagePage } from "./options/message-page";
import { faPlaneDeparture, faBell, faWifi, faVolumeUp, faPalette, faMoon, faSimCard, faBrush } from '@fortawesome/free-solid-svg-icons'
import { faBluetooth } from '@fortawesome/free-brands-svg-icons'

export interface ISettingsProps {
    id: number,
    title?: string,
    rightLabel?: string,
    checkbox?: boolean,
    backround?: string,     // pour la couleur du cube ou rentre l'immage  // OBLIGATOIRE SINON AFFICHE PAS
    img?: any,              // l'immage
    imgType?: string,       // pour le style (img centrée)
    imgColor?: string,      // pour la couleur de l'immage
    alt?: boolean           // separateur if true
}

const settingsDataList: ISettingsProps[] = [
    { id: 1, title: 'Mode Avion', img: faPlaneDeparture, imgType: 'fontAwesome-icon1', imgColor: '#fff', backround: '#ff9900', checkbox: true },
    { id: 2, title: 'Wifi', img: faWifi, imgType: 'fontAwesome-icon1', imgColor: '#fff', backround: '#327bf6', /*rightLabel: "test" */ },
    { id: 3, title: 'Bluetooth', img: faBluetooth, imgType: 'fontAwesome-icon2', imgColor: '#fff', backround: '#327bf6'  },
    { id: 4, title: 'Cartes SIM', img: faSimCard, imgType: 'fontAwesome-icon4', imgColor: '#fff', backround: '#00ff99'  },

    { id: 0, alt: true },
    { id: 5, title: 'Notifications', img: faBell, imgType: 'fontAwesome-icon2', imgColor: '#fff', backround: '#ff0000'  },
    { id: 6, title: 'Sons & Vibrations', img: faVolumeUp, imgType: 'fontAwesome-icon3', imgColor: '#fff', backround: '#ff0000'  },
    { id: 7, title: 'Fond d\'ecran', img: faPalette, imgType: 'fontAwesome-icon3', imgColor: '#fff', backround: '#33cccc'  },
    { id: 8, title: 'Mode Nuit', img: faMoon, imgType: 'fontAwesome-icon3', imgColor: '#fff', backround: '#666699'  },
    { id: 9, title: 'Theme', img: faBrush, imgType: 'fontAwesome-icon4', imgColor: '#fff', backround: '#660066'  },

]

const SettingsList: React.FC = (props: any) => {
    const getSettings = () => {
        return settingsDataList.map((item, k) => {
            return (
                <Link key={k} to={`${props.match.path}/${k}`}>
                    <ISettings {...item} />
                </Link>
            )
        })
    }

    return (
        <div className="mail-box">
            {getSettings()}
        </div>
    )
}

const Settings: React.FC = (props: any) => {
    const [value, setValue] = useState(false);

    return (
        <AppContainer>
            <HeaderApp title="Réglages" onClickOnRightText={() => {}} />
            <div className="settings-banner"> </div>

            <Switch>
                <Route exact path={props.match.path} component={SettingsList} />
                {/*<Route path={`${props.match.path}/:id`} component={MessagePage} />*/}
            </Switch>
        </AppContainer>
    )
};

export default Settings;