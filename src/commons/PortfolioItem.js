import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Row, Col } from "react-onsenui";

const doughnutOptions = {
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const doughnutData = {
  labels: ["BTC", "LTC", "STRAT", "XMR", "NEO "],
  datasets: [
    {
      backgroundColor: ["#6D7788", "#41A0DE", "#F15946", "#9b59b6", "#EABA6B"],
      data: [12, 19, 3, 17, 28]
    }
  ]
};

const lineOptions = {
  title: {
    display: false
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  elements: { point: { radius: 0 } },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

const lineData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  datasets: [
    {
      data: [1, 3, 2, 3, 4, 6, 3, 8],
      borderColor: "#3e95cd",
      fill: false
    }
  ]
};

const PortfolioItem = ({ chartId, onClick }) => (
  <Row id={`portfolioItem${chartId}`}>
    <div className="profile-image-container">
      <div className="profile-image" />
    </div>
    <Col>
      <div className="portfolio-name">Portfolio Name</div>
      <div className="user">User Name</div>
    </Col>
    <div className="list-item__right">
      <Doughnut
        options={doughnutOptions}
        data={doughnutData}
        style={{
          maxWidth: "70px",
          minWidth: "15px",
          maxHeight: "70px",
          minHeight: "15px"
        }}
      />
    </div>
    <div className="list-item__right">
      <Line
        options={lineOptions}
        data={lineData}
        style={{
          maxWidth: "200px",
          minWidth: "20px",
          maxHeight: "50px",
          minHeight: "20px"
        }}
      />
    </div>
  </Row>
);

export default PortfolioItem;
