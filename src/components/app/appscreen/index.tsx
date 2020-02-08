import React from "react";

import './AppScreen.scss'

import { AppItem, IAppItemProps } from "../appitem";

const applicationList: IAppItemProps[] = [
    { name: 'Mail', icon: 'mail' },
    { name: 'Calendrier', icon: 'calendar' },
    { name: 'Galerie', icon: 'photos' },
    { name: "Camera", icon: 'camera' },
    { name: 'Maps', icon: 'map' },
    { name: 'Horloge', icon: 'clock' },
    { name: 'Météo', icon: 'weather' },
    { name: 'News', icon: 'news' },
    { name: 'Home', icon: 'home' },
    { name: 'Notes', icon: 'notes' },
    { name: 'Stocks', icon: 'stocks' },
    { name: 'Wallet', icon: 'wallet' },
    { name: 'Workspace', icon: 'workspace' },
    { name: 'App Store', icon: 'appstore' },
    { name: 'Health', icon: 'health' },
    { name: 'iBooks', icon: 'ibooks' },
    { name: 'WhatsApp', icon: 'whatsapp' },
    { name: 'Local', icon: 'local' },
    { name: 'Réglages', icon: 'settings' },
]

export const AppScreen: React.FC = () => {
    const getApplications = () => {
        return applicationList.map((e) => {
            return <AppItem name={e.name} icon={e.icon} />
        })
    }

    return (
        <div className="app-screen">
            <div className="app-screen-container">
                {getApplications()}
            </div>
        </div>
    )
};
