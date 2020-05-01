import React from "react";
import './Contacts.scss';
import AppContainer from "../../utils/AppContainer";
import { Switch, Route } from "react-router-dom";
import ContactsPage from "./contacts-page";
import EditContactPage from "./contact-details-page";

const Contacts: React.FC = (props: any) => {
    return (
        <AppContainer backgroundColor="#f6f6f6">
            <Switch>
                <Route path={props.match.path} exact component={ContactsPage} />
                <Route path={`${props.match.path}/:id`} component={EditContactPage} />
            </Switch>
        </AppContainer >
    );
};

export default Contacts;