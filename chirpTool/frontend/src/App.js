import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ChatBuilder from "./components/ChatBuilder";
import NotFound from "./components/NotFound";
import './App.css';
import builderApp from "./reducers";
import thunk from "redux-thunk";

let store = createStore(builderApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ChatBuilder} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
