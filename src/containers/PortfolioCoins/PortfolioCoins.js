import React from 'react';
import {
  Page,
  SearchInput,
  List,
  ListItem,
  Checkbox,
} from 'react-onsenui';

const coins = [
  { id: 'check-1', title: 'Bitcoin BTC' },
  { id: 'check-2', title: 'Monero (XMR)' },
  { id: 'check-3', title: 'Neo (NEO)' },
  { id: 'check-4', title: 'Cardano (ADA)' },
  { id: 'check-5', title: 'Stratis (STRAT)' },
];

const PortfolioCoins = ({ back }) => (
  <Page className="coins-list" >
    <div className="toolbar blue">
      <div className="toolbar__left" >
        <span className="toolbar-button">
          <i
            onClick={() => back()}
            className="icon-close"
            style={{ fontSize: '30px' }}
          />
        </span>
      </div>
      <div className="toolbar__center">Add Portfolio</div>
      <div className="toolbar__right" >
        <span
          className="toolbar-button"
          onClick={() => back()}
        >
          Select
        </span>
      </div>
    </div>
    <SearchInput
      className="search"
      placeholder="Search"
    />
    <List
      dataSource={coins}
      renderRow={({ title, id }) => (
        <ListItem key={id} tappable >
          <label className="left">
            <Checkbox inputId={id} />
          </label> 
          <label className="center" htmlFor={id}>
            {title}
          </label>
        </ListItem>
      )}
    />
  </Page>
);

export default PortfolioCoins;
