import React from "react";
import { Switch, Route } from "react-router-dom";
import RoomSearch from "../pages/room-search";
import WelcomPage from "../pages/welcom-page";


export default class Router extends React.Component {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path='/' component={WelcomPage} />
        <Route exact path='/room-search' component={RoomSearch} />
      </Switch>
    )
  }
}