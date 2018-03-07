import {
  compose,
  setDisplayName,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import TabProfile from './TabProfile';
import PortfolioCreate from '../PortfolioCreate';
import Login from '../Login';
import ProfileEdit from '../ProfileEdit';
import PortfolioDetail from '../PortfolioDetail';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  withStateHandlers(
    () => ({
      isOpenSheet: false,
    }),
    {
      openSheet: () => () => ({ isOpenSheet: true }),
      closeSheet: () => () => ({ isOpenSheet: false }),
      toggleSheet: ({ isOpenSheet }) => () => ({
        isOpenSheet: !isOpenSheet,
      }),
    }
  ),
  withHandlers({
    createPortfolio: ({ navigator }) => () =>  {
      navigator.pushPage(
        { component: PortfolioCreate, props: { indexPage: 0 } },
        { animation: 'lift' }
      );
    },
    portfolioDetail: ({ navigator }) => () => {
      navigator.pushPage(
        { component: PortfolioDetail, props: { indexPage: 0 } },
        { animation: 'lift' }
      );
    },
    getListsSheet: ({ closeSheet, navigator, clearUser }) => () => ([
      { 
        title: 'Edit',
        props: { onClick: () => {
          closeSheet();
          navigator.pushPage(
            { component: ProfileEdit, props: { indexPage: 0 } },
            { animation: 'fade' }
          );
        }} 
      },
      {
        title: 'Logout',
        props: { onClick: () => {
          closeSheet();
          // clearUser();
          navigator.pushPage(
            { component: Login },
            { animation: 'lift' }
          );
        }}
      },
      {
        title: 'Cancle',
        props: {
          onClick: () => closeSheet(),
          icon: "md-close"
        }
      },
    ])
  }),
  setDisplayName('TabProfile'),
);

const TabProfileContainer = withAuth(enchance(TabProfile));

export default TabProfileContainer;
