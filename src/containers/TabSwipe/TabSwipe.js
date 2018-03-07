import React from 'react';
import {
  Page,
  Row,
} from 'react-onsenui';
import Portfolio from '../../commons/Portfolio';

const TapSwipe = ({ openDetailsBig, refetch }) => (
  <Page id="Tab2">
    <div className="cards-container portfolio-card-container">
      <div className="card card1" id="current-card" onClick={() => openDetailsBig()}>
        <div className="card-image">
          <span className="card-image-yes">
            FOLLOW
          </span>
          <span className="card-image-no">
            NOPE
          </span>
        </div>
        <Portfolio chartId={5} />
      </div>
      <Row>
        <button className="button" onClick={() => refetch()} style={{ margin: '200px auto' }} >Try again</button>
      </Row>
    </div>
  </Page>
);

export default TapSwipe;
