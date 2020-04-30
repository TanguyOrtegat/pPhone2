import React from "react";
import { Switch, Route } from "react-router-dom";
import AnswerPage from "./answer-page";
import InCallPage from "./in-call-page";
import "./Call.scss";

const Call: React.FC = (props: any) => {
    return (
        <div className="blur-background">
            <Switch>
                <Route path={props.match.path} exact component={InCallPage} />
                <Route path={`${props.match.path}/answer`} component={AnswerPage} />
            </Switch>
        </div>
    );
}

export default Call;