import React from 'react';
import { Tab } from "react-onsenui";
import {
  setDisplayName,
  compose,
  withState,
  withHandlers,
} from 'recompose';
import MainPage from './MainPage';
import TabList from '../TabList';
import TabProfile from '../TabProfile';
import TabSwipe from '../TabSwipe';

const mainPageTabs = props => ([
  {
    content: <TabProfile {...props} key="profile" content="profile" />,
    tab: <Tab key="profile" className="tab"><i className="icon-profile" /></Tab>
  },
  {
    content: <TabSwipe {...props} key="swipe" content="swipe" />,
    tab: <Tab key="swipe" className="tab"><i className="icon-swipe" /></Tab>
  },
  {
    content: <TabList {...props} key="list" content="list" />,
    tab: (
      <Tab key="list" className="tab" badge={3}>
        <i className="icon-list"  />
      </Tab>
    )
  },
]);

const enchance = compose(
  withState('indexPage', 'setIndexPage', 1),
  withHandlers({
    onPreChange: ({ indexPage, setIndexPage }) => index => {
      if (index !== indexPage) {
        setIndexPage(index);
      }
    },
    renderTabs: props => () => mainPageTabs(props),
  }),
  setDisplayName('MainPage'),
);

const MainPageContainer = enchance(MainPage);

export default MainPageContainer;
