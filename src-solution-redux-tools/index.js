import React, {Component} from "react";
import ReactDOM from "react-dom";

import reducers from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  enhancedCompose(
    applyMiddleware(
      logger
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

