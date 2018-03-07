import React from "react";
import { Navigator } from "react-onsenui";
import MainPage from "./containers/MainPage";

const AppNavigator = () => (
  <Navigator
    id="navigator"
    className="navigator"
    renderPage={(route, navigator) => {
      const props = route.props || {};
      props.navigator = navigator;
      props.key = route.component.displayName

      return React.createElement(route.component, props);
    }}
    initialRoute={{ component: MainPage }}
  />
);

export default AppNavigator;
