import React from "react";
import AppContainer from "../../utils/AppContainer";
import HeaderApp from "../../utils/HeaderApp";
import { Switch, Route } from "react-router-dom";
import KeypadPage from "./keypad-page";
import FavouritesPage from "./favourites-page";
import VoicemailPage from "./voicemail-page";
import RecentsPage from "./recents-page";
import TabsNavigator, { ITab } from "../../utils/TabsNavigator/TabsNavigator";

import ClockIcon from "../../../assets/icons/clock-fill.svg";
import StarIcon from "../../../assets/icons/star-fill.svg";
import CircleGridIcon from "../../../assets/icons/circle-grid.svg";
import PersonCircleIcon from "../../../assets/icons/person-circle.svg";
import VoicemailIcon from "../../../assets/icons/voicemail.svg";
import ContactsPage from "../contacts/contacts-page";
import ContactDetailsPage from "../contacts/contact-details-page";



const Phone: React.FC = (props: any) => {
    const appPath = props.match.path;

    const paths = {
        contact: `${appPath}/contact`,
        recents: `${appPath}/recents`,
        keypad: `${appPath}`,
        favourites: `${appPath}/favourites`,
        voicemail: `${appPath}/voicemail`
    }

    const tabs: ITab[] = [
        { name: "Favourites", route: paths.favourites, exactRoute: false, icon: StarIcon },
        { name: "Contact", route: paths.contact, exactRoute: false, icon: PersonCircleIcon },
        { name: "Keypad", route: paths.keypad, exactRoute: true, icon: CircleGridIcon },
        { name: "Recents", route: paths.recents, exactRoute: false, icon: ClockIcon },
        { name: "Voicemail", route: paths.voicemail, exactRoute: false, icon: VoicemailIcon }
    ]

    return (
        <AppContainer>
            <Switch>
                <Route path={paths.keypad} exact component={KeypadPage} />
                <Route path={paths.recents} component={RecentsPage} />
                <Route path={paths.voicemail} component={VoicemailPage} />
                <Route path={paths.favourites} component={FavouritesPage} />
                <Route path={paths.contact} exact component={ContactsPage} />
                <Route path={`${paths.contact}/:id`} component={ContactDetailsPage} />
            </Switch>
            <TabsNavigator tabs={tabs}></TabsNavigator>
        </AppContainer >
    );
}

export default Phone;