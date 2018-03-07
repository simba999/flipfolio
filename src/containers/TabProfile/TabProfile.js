import React from 'react';
import {
  Page,
  List,
  ListHeader,
  ListItem,
  Row,
  Button,
} from 'react-onsenui';
import PortfolioItem from '../../commons/PortfolioItem';
import Sheet from '../../commons/Sheet';

const mockChartId = [{ chartId: 3 }, { chartId: 4 }];

const TapProfile = ({
  createPortfolio,
  isOpenSheet,
  closeSheet,
  openSheet,
  getListsSheet,
  portfolioDetail,
}) => (
  <Page id="Tab1">
    <div className="profile-card">
      <div className="profile-image-container">
        <div className="profile-image" />
        <div className="profile-edit">
          <i className="icon-settings" onClick={() => openSheet()} />
        </div>
      </div>
      <div>
      </div>
      <div className="profile-name">Dave Graham</div>
      <div className="profile-coins">240 FFL</div>
    </div>
    <List
      id="my-portfolios"
      dataSource={mockChartId}
      renderHeader={() => (
        <ListHeader>My portfolios</ListHeader>
      )}
      renderRow={(row) =>  (
        <ListItem  key={row.chartId} onClick={() => portfolioDetail()} tappable>
          <PortfolioItem {...row} />
        </ListItem>
      )}
    />
    <Row>
      <Button
        className="button--quiet"
        style={{ margin: '10px auto' }}
        onClick={() => createPortfolio()}
      >
        Create portfolio
      </Button>
    </Row>
    <Sheet
      isOpenSheet={isOpenSheet}
      closeSheet={() => closeSheet()}
      lists={getListsSheet()}
      />
  </Page>
);

export default TapProfile;
