import React from "react";
import { Page, List, ListItem, Col, Row } from "react-onsenui";

// ons-page#create-portfolio
//   .toolbar.blue
//       .toolbar__left
//         span.toolbar-button
//           i.icon-close(onclick="back();" style='font-size: 30px;')
//       .toolbar__center
//         | Add Portfolio
//       .toolbar__right
//         span.toolbar-button(onclick="back()") Save
//   ons-list
//     ons-list-item
//       ons-col(width="19%") BTC
//       ons-col(width="19%")
//          input.text-input(type='numbers' placeholder='Amount' value="1.24")
//       ons-col(width="19%")
//         .list-item__label
//            | $ 12029
//       ons-col(width="21%")
//         input.text-input(type='date' placeholder='Date' value="18 Feb 2018")
//     ons-list-item
//       ons-col(width="19%") NEO
//       ons-col(width="19%")
//         input.text-input(type='numbers' placeholder='Amount' value='282.11')
//       ons-col(width="19%")
//         .list-item__label
//          | $ 20293
//       ons-col(width="19%")
//         input.text-input(type='date' placeholder='Date' value="17 Feb 2018")
//     ons-list-item
//       ons-col(width="19%")  ADA
//       ons-col(width="19%")
//         input.text-input(type='numbers' placeholder='Amount' value="92.23")
//       ons-col(width="19%")
//         .list-item__label
//          | $ 120
//       ons-col(width="19%")
//         input.text-input(type='date' placeholder='Date' value="16 Feb 2018")
//     ons-row
//      button.button--quiet(style=' margin: 10px auto;' onclick="openCoinsList()") Add Coin

const datas = [
  { title: "BTC", value: 1.24, price: "$ 12029", datetime: "18 Feb 2018" },
  { title: "NEO", value: 282.11, price: "$ 20293", datetime: "17 Feb 2018" },
  { title: "ADA", value: 92.23, price: "$ 120", datetime: "16 Feb 2018" },
  { title: "Add Coin", isEnd: true }
];

const PortfolioCreate = ({
  portfolioCoins,
  back,
}) => (
  <Page id="create-portfolio">
    <div className="toolbar blue">
      <div className="toolbar__left">
        <span className="toolbar-button">
          <i
            onClick={() => { back() }}
            className="icon-close"
            style={{ fontSize: "30px" }}
          />
        </span>
      </div>
      <div className="toolbar__center">Add Portfolio</div>
      <div className="toolbar__right">
        <span onClick={() => { back() }} className="toolbar-button">Save</span>
      </div>
    </div>
    <List
      dataSource={datas}
      renderRow={({ title, value, price, datetime, isEnd }) =>
        (!isEnd) ? (
          <ListItem key={title}>
            <Col width="19%">{title}</Col>
            <Col width="19%">
              <input
                className="text-input"
                defaultValue={value}
                type="numbers"
                placeholder="Amount"
              />
            </Col>
            <Col width="19%">
              <div className="list-item__label">{price}</div>
            </Col>
            <Col width="21%">
              <input
                className="text-input"
                defaultValue={datetime}
                type="date"
                placeholder="Date"
              />
            </Col>
          </ListItem>
        ) : (
          <Row key={title}>
            <button onClick={() => portfolioCoins() } className="button--quiet" style={{ margin: "10px auto" }}>
              {title}
            </button>
          </Row>
        )
      }
    />
  </Page>
);

export default PortfolioCreate;
