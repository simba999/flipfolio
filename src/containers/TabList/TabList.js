import React from 'react';
import {
  Page,
  List,
  ListHeader,
  ListItem,
} from 'react-onsenui';
import PortfolioItem from '../../commons/PortfolioItem';

const mockChartId = [{ chartId: 3 }, { chartId: 4 }];

const TapList = ({ getProfileDetail }) => (
  <Page id="Tab3">
    <List
      id="my-portfolios"
      dataSource={mockChartId}
      renderHeader={() => (
        <ListHeader>Followed Portfolios</ListHeader>
      )}
      renderRow={(row) =>  (
        <ListItem
          key={row.chartId}
          tappable
          onClick={() => getProfileDetail()}
        >
          <PortfolioItem {...row} />
        </ListItem>
      )}
    />
  </Page>
);

export default TapList;
