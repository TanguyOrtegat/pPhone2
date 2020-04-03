import React from "react";

import './AppItem.scss'

import MailIcon from '../../../assets/icons/mail.png'
import PhotosIcon from '../../../assets/icons/photos.png'
import CameraIcon from '../../../assets/icons/camera.png'
import CalendarIcon from '../../../assets/icons/calendar.png'
import MapIcon from '../../../assets/icons/maps.png'
import ClockIcon from '../../../assets/icons/clock.png'
import WeatherIcon from '../../../assets/icons/weather.png'
import NewsIcon from '../../../assets/icons/news.png'
import HomeIcon from '../../../assets/icons/home.png'
import NotesIcon from '../../../assets/icons/notes.png'
import StocksIcon from '../../../assets/icons/stocks.png'
import WalletIcon from '../../../assets/icons/wallet.png'
import WorkspaceIcon from '../../../assets/icons/workspace.png'
import AppStoreIcon from '../../../assets/icons/appstore.png'
import HealthIcon from '../../../assets/icons/health.png'
import iBooksIcon from '../../../assets/icons/ibooks.png'
import WhatsappIcon from '../../../assets/icons/whatsapp.png'
import LocalIcon from '../../../assets/icons/local.png'
import SettingsIcon from '../../../assets/icons/settings.png'

import FacebookIcon from '../../../assets/icons/facebook.png'
import InstagramIcon from '../../../assets/icons/instagram.png'
import MessagesIcon from '../../../assets/icons/messages.png'
import MessengerIcon from '../../../assets/icons/messenger.png'
import CallIcon from '../../../assets/icons/call.png'
import { Link } from "react-router-dom";

const iconList = {
    'mail': MailIcon,
    'photos': PhotosIcon,
    'camera': CameraIcon,
    'calendar': CalendarIcon,
    'map': MapIcon,
    'clock': ClockIcon,
    'weather': WeatherIcon,
    'news': NewsIcon,
    'home': HomeIcon,
    'notes': NotesIcon,
    'stocks': StocksIcon,
    'wallet': WalletIcon,
    'workspace': WorkspaceIcon,
    'appstore': AppStoreIcon,
    'health': HealthIcon,
    'ibooks': iBooksIcon,
    'whatsapp': WhatsappIcon,
    'local': LocalIcon,
    'settings': SettingsIcon,
    'facebook': FacebookIcon,
    'instagram': InstagramIcon,
    'messages': MessagesIcon,
    'messenger': MessengerIcon,
    'call': CallIcon
}

export interface IAppItemProps {
    name?: string,
    icon: keyof typeof iconList,
    path?: string
}

export const AppItem: React.FC<IAppItemProps> = (props: IAppItemProps) => {
    const appPath = props.path ? `app/${props.path}` : ""

    return (
        <Link to={appPath} className="app-icon">
            <div className="app-icon-image" style={{ backgroundImage: `url(${iconList[props.icon]})` }} />
            {props.name && <span className="app-text">{props.name}</span>}
        </Link>
    )
};
