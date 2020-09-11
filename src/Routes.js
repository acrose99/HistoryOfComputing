import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Team from "./container/Team";
import Home from "./container/Home";
import Home98 from "./container/Home98";
import NfError from "./container/NFError";
import Timeline from "./container/Timeline";
import EventFocus from "./components/EventFocus";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home98} appProps={appProps} />
      <AppliedRoute path="/home" exact component={Home} appProps={appProps} />
      <AppliedRoute
        path="/focused"
        exact
        component={EventFocus}
        appProps={appProps}
      />
      {/* Route to historiography page*/}
      <AppliedRoute
        path="/timeline"
        exact
        component={Timeline}
        appProps={appProps}
      />
      {/*{ /* Route to contact page */}*/}
      {/*<AppliedRoute path="/contact" exact component={Contact} appProps={appProps} />*/}
      {/* Route to team page */}
      <AppliedRoute path="/team" exact component={Team} appProps={appProps} />
      {/*{ /* Route to Documentation page */}*/}
      {/*<AppliedRoute path="/documentation" exact component={Documentation} appProps={appProps} />*/}
      {/* Redirects to 404 error for any route that doesnt match */}
      <Route component={NfError} />
    </Switch>
  );
}
