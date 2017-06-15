import React, {Component} from "react";
import ReactDOM from "react-dom";

import reducers from "./reducers";
import App from "./App";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  enhancedCompose(
    applyMiddleware(
      thunkMiddleware,
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

