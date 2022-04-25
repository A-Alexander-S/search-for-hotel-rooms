import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ColorsAndTypePage from "../pages/ui_kit/ColorsAndTypePage/ColorsAndTypePage";
import FormElementsPage from "../pages/ui_kit/FormElementsPage/FormElementsPage";
import CardsUiKitPage from "../pages/ui_kit/CardsUiKitPage/CardsUiKitPage";

export default class RouterUiKit extends Component {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path='/' component={ColorsAndTypePage} />
        <Route exact path='/ui_kit/index.html' component={ColorsAndTypePage} />
        <Route exact path='/formelements' component={FormElementsPage} />
        <Route exact path='/cards' render={() =>
          <CardsUiKitPage />
        } />
      </Switch>
    )
  }
}