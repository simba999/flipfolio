import {
  compose,
  setDisplayName,
  withHandlers,
} from 'recompose';
import TabList from './TabList';
import PortfolioDetail from '../PortfolioDetail';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName('TabList'),
  withHandlers({
    getProfileDetail: ({ navigator }) => () => {
      navigator.pushPage({
        component: PortfolioDetail,
        props: { indexPage: 2 }
      });
    }
  }),
);

const TabListContainer = withAuth(enchance(TabList));

export default TabListContainer;
