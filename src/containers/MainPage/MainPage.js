import React from "react";
import { Page, Tabbar } from "react-onsenui";

const MainPage = ({
  indexPage,
  onPreChange,
  renderTabs,
}) => (
  <Page>
    <Tabbar
      className="tapbar"
      position="auto"
      index={indexPage}
      onPreChange={e => onPreChange(e.index)}
      renderTabs={() => renderTabs()}
      swipeable={false}
    />
  </Page>
);

export default MainPage;
