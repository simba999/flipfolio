import { compose, setDisplayName, withHandlers } from "recompose";
import $ from "jquery";
import TabSwipe from "./TabSwipe";
import PortfolioDetail from "../PortfolioDetail";
import withAuth from '../../hocs/withAuth';

const enchance = compose(
  setDisplayName("TabSwipe"),
  withHandlers({
    refetch: () => () => window.location.reload(),
    openDetailsBig: ({ navigator }) => () => {
      navigator.pushPage(
        { component: PortfolioDetail, props: { indexPage: 1 } },
        {
          animation: "fade",
          animationOptions: { duration: 0.2, delay: 0.5 }
        }
      );
      const currentCard = document.getElementById("current-card");
      $(currentCard).addClass("big");
    }
  }),
);

const TabSwipeContainer = withAuth(enchance(TabSwipe));

export default TabSwipeContainer;
