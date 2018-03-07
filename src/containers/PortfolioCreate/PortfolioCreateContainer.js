import {
  compose,
  setDisplayName,
  withHandlers,
} from 'recompose';
import PortfolioCreate from './PortfolioCreate';
import PortfolioCoins from '../PortfolioCoins';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName('PortfolioCreate'),
  withHandlers({
    back: ({ navigator }) => () => {
      navigator.popPage();
    }, 
    portfolioCoins: ({ navigator }) => () => {
      navigator.pushPage(
        { component: PortfolioCoins },
        { animation: 'lift' },
      );
    }
  })
);

const PortfolioCreateContainer = withAuth(enchance(PortfolioCreate));

export default PortfolioCreateContainer;
