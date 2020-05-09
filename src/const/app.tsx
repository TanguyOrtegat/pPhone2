import { IAppItemProps } from "../components/home/appitem";

import MailIcon from '../assets/icons/mail.png'
import PhotosIcon from '../assets/icons/photos.png'
import CameraIcon from '../assets/icons/camera.png'
import MapIcon from '../assets/icons/maps.png'
import ClockIcon from '../assets/icons/clock.png'
import WeatherIcon from '../assets/icons/weather.png'
import NewsIcon from '../assets/icons/news.png'
import HomeIcon from '../assets/icons/home.png'
import NotesIcon from '../assets/icons/notes.png'
import StocksIcon from '../assets/icons/stocks.png'
import WalletIcon from '../assets/icons/wallet.png'
import WorkspaceIcon from '../assets/icons/workspace.png'
import AppStoreIcon from '../assets/icons/appstore.png'
import HealthIcon from '../assets/icons/health.png'
import ContactsIcon from '../assets/icons/contacts.png'
import WhatsappIcon from '../assets/icons/whatsapp.png'
import LocalIcon from '../assets/icons/local.png'
import SettingsIcon from '../assets/icons/settings.png'
import CalculatorIcon from '../assets/icons/calculator.png'

import FacebookIcon from '../assets/icons/facebook.png'
import InstagramIcon from '../assets/icons/instagram.png'
import MessagesIcon from '../assets/icons/messages.png'
import MessengerIcon from '../assets/icons/messenger.png'
import CallIcon from '../assets/icons/call.png'

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
    { name: 'Réglages', icon: 'settings', path: 'Settings' },
    { name: 'Banque', icon: 'wallet', path: 'bank' },
    //{ name: 'Workspace', icon: 'workspace' },
    { name: 'App Store', icon: 'appstore' },
    //{ name: 'Health', icon: 'health' },
    { name: 'Contacts', icon: 'contacts', path: 'contacts' },
    //{ name: 'WhatsApp', icon: 'whatsapp' },
    //{ name: 'Local', icon: 'local' },
    { name: 'Calculator', icon: 'calculator', path: 'calculator' }
]

export const bottomApplicationList: IAppItemProps[] = [
    { name: 'Téléphone', icon: 'call', path: 'phone' },
    { name: 'Messages', icon: 'messages', path: 'messages', notifications: 6 },
    { name: 'Mail', icon: 'mail', path: 'mail', notifications: 42 },
    { name: 'Notes', icon: 'notes', path: 'notes' },
]

export const iconList = {
    'mail': MailIcon,
    'photos': PhotosIcon,
    'camera': CameraIcon,
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
    'contacts': ContactsIcon,
    'whatsapp': WhatsappIcon,
    'local': LocalIcon,
    'settings': SettingsIcon,
    'facebook': FacebookIcon,
    'instagram': InstagramIcon,
    'messages': MessagesIcon,
    'messenger': MessengerIcon,
    'call': CallIcon,
    'calculator': CalculatorIcon
}