import {
  compose,
  setDisplayName,
  withHandlers,
} from 'recompose';
import PortfolioCoins from './PortfolioCoins';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName('PortfolioCoins'),
  withHandlers({
    back: ({ navigator }) => () => navigator.popPage(),
  })
);

const PortfolioCoinsContainer = withAuth(enchance(PortfolioCoins));

export default PortfolioCoinsContainer;
