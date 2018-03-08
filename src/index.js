import 'onsenui/css/onsenui.css';
import './custom/onsen-css-components.css';
import "./css/flipfolio.css";
import initJS from './initJS';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ApolloProvider } from 'react-apollo';
import store, { persistOptions } from './configurationStore';
import client from './configurationApolloClient';
import AppNavigator from './AppNavigator';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    </Provider>
    , document.getElementById("root")
  );
};

persistStore(store, persistOptions, () => {
  render();
  initJS();
});
