import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Router, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import RouterUiKit from '../../components/RouterUiKit';
import ColorsAndTypePage from "./ColorsAndTypePage/ColorsAndTypePage";

ReactDOM.render(
  // <Provider >
  <HashRouter >
    <RouterUiKit />
  </HashRouter>,
  // </Provider>,
  document.getElementById('ui_kit')
);