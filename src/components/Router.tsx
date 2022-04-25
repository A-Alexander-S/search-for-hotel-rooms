import React from "react";
import { Switch, Route } from "react-router-dom";


export default class Router extends React.Component {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path='layout' />
      </Switch>
    )
  }
}