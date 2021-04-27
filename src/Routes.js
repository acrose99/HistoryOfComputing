import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Team from "./container/Team";
import Home from "./container/Home";
import TimelineContainer from "./container/TimelineContainer";
import NFError from "./container/NFError";
export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/home" exact component={Home} appProps={appProps} />
      {/*{ /* Route to historiography page */}
      <AppliedRoute
        path="/timeline"
        exact component={TimelineContainer}
        appProps={appProps}
      />
      {/*{ /* Route to contact page */}
      {/*<AppliedRoute path="/contact" exact component={Contact} appProps={appProps} />*/}
      {/* Route to team page */}
      <AppliedRoute path="/team" exact component={Team} appProps={appProps} />
      <AppliedRoute path="/event" exact component={FocusEvent} appProps={appProps} />
      {/*{ /* Route to Documentation page */}
      {/*<AppliedRoute path="/documentation" exact component={Documentation} appProps={appProps} />*/}
      {/* Redirects to 404 error for any route that doesnt match */}
      <Route component={NFError} />
    </Switch>
  );
}
