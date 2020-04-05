import { IAppItemProps } from "../components/home/appitem";

export const applicationList: IAppItemProps[] = [
    //{ name: 'Mail', icon: 'mail', path: 'mail' },
    { name: 'Calendrier', icon: 'calendar' },
    { name: 'Galerie', icon: 'photos' },
    { name: "Camera", icon: 'camera', path: 'camera' },
    //{ name: 'Maps', icon: 'map' },
    { name: 'Horloge', icon: 'clock' },
    { name: 'Météo', icon: 'weather' },
    //{ name: 'News', icon: 'news' },
    //{ name: 'Home', icon: 'home' },
    //{ name: 'Notes', icon: 'notes' },
    //{ name: 'Stocks', icon: 'stocks' },
    { name: 'Banque', icon: 'wallet', path: 'Bank' },
    //{ name: 'Workspace', icon: 'workspace' },
    { name: 'App Store', icon: 'appstore' },
    //{ name: 'Health', icon: 'health' },
    { name: 'Répertoire', icon: 'ibooks' },
    //{ name: 'WhatsApp', icon: 'whatsapp' },
    //{ name: 'Local', icon: 'local' },
    { name: 'Réglages', icon: 'settings' },
]

export const bottomApplicationList: IAppItemProps[] = [
    { name: 'Téléphone', icon: 'call' },
    { name: 'Messages', icon: 'messages', path: 'messages' },
    { name: 'Mail', icon: 'mail', path: 'mail' },
    { name: 'Notes', icon: 'notes', path: 'notes' },
]