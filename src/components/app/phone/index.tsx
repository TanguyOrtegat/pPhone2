import React from "react";
import AppContainer from "../../utils/AppContainer";
import HeaderApp from "../../utils/HeaderApp";
import { Switch, Route } from "react-router-dom";
import KeypadPage from "./keypad-page";
import FavouritesPage from "./favourites-page";
import VoicemailPage from "./voicemail-page";
import RecentsPage from "./recents-page";

const Phone: React.FC = (props: any) => {
    return (
        <AppContainer>
            <HeaderApp color="#000000" title="Phone" />
            <Switch>
                <Route path={`${props.match.path}`} exact component={KeypadPage} />
                <Route path={`${props.match.path}/recents`} component={RecentsPage} />
                <Route path={`${props.match.path}/voicemail`} component={VoicemailPage} />
                <Route path={`${props.match.path}/favourites`} component={FavouritesPage} />
            </Switch>
        </AppContainer>
    );
}

export default Phone;