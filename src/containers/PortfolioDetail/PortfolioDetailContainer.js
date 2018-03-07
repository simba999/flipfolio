import {
  compose,
  setDisplayName,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import $ from 'jquery';
import PortfolioDetail from './PortfolioDetail';
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName('PortfolioDetail'),
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
    closePage: ({ navigator }) => () => {
      navigator.popPage().then(() => {
        let currentCard = document.getElementById('current-card');
        if (currentCard) {
          $(currentCard).removeClass("big"); 
        }
      })
    },
    getListsSheet: ({ closeSheet }) => () => ([
      { 
        title: 'Edit',
        props: { onClick: () => closeSheet() } 
      },
      {
        title: 'Copy',
        props: { onClick: () => closeSheet() }
      },
      {
        title: 'Cancle',
        props: {
          onClick: () => closeSheet(),
          icon: "md-close"
        }
      },
    ])
  })
);

const PortfolioDetailContainer = withAuth(enchance(PortfolioDetail));

export default PortfolioDetailContainer;
