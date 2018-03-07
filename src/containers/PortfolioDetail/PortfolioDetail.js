import React from "react";
import {
  Page,
  List,
  ListHeader,
  ListItem,
  Col,
} from "react-onsenui";
import Portfolio from "../../commons/Portfolio";
import Sheet from '../../commons/Sheet';

const datas = [
  { title: "Bought 10% ETH, Sold 7% BTC", time: "two days ago" },
  { title: "Bought 8% ADA, Sold 4% STRAT", time: "three days ago" },
  { title: "Bought 10% BTC & 15% ADA", time: "a week ago" },
  { title: "Portfolio created", time: "month ago" }
];

const PortfilioDetail = ({
  closePage,
  isOpenSheet,
  openSheet,
  closeSheet,
  getListsSheet,
  isShowChart,
  setIsShowChart,
}) => (
  <Page className="portfolio-details">
    <div className="toolbar blue">
      <div className="toolbar__left">
        <span className="toolbar-button">
          <i
            onClick={() => closePage()}
            className="icon-close"
            style={{ fontSize: "30px" }}
          />
        </span>
      </div>
      <div className="toolbar__center">Portfolio Details</div>
      <div className="toolbar__right">
        <i
          onClick={() => openSheet()}
          className="ion-ios-more"
          style={{ fontSize: "30px", marginRight: "20px" }}
        />
      </div>
    </div>
    <div>
      <button
        className="button follow"
        style={{
          position: "absolute",
          right: "20px",
          marginTop: "20px"
        }}
      >
        Follow
      </button>
      <Portfolio chartId={6} />
      <List
        renderHeader={() => <ListHeader>History</ListHeader>}
        dataSource={datas}
        renderRow={({ title, time }) => (
          <ListItem key={title}>
            <Col>{title}</Col>
            <div className="list-item__label">{time}</div>
          </ListItem>
        )}
      />
      <Sheet
        isOpenSheet={isOpenSheet}
        closeSheet={() => closeSheet()}
        lists={getListsSheet()}
      />
    </div>
  </Page>
);

export default PortfilioDetail;
