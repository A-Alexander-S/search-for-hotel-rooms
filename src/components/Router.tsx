import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomPage from "../pages/welcom-page";


export default class Router extends React.Component {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path='/' component={WelcomPage} />
      </Switch>
    )
  }
}