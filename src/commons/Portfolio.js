import 'chart.piecelabel.js';
import React from "react";
import { Row, Col } from "react-onsenui";
import { Line, Doughnut } from "react-chartjs-2";

const doughnutOptions = {
  tooltips: {
    enabled: false
  },
  legend: {
    display: true,
    labels: {
      boxWidth: 10
    }
  },
  pieceLabel: {
    render: "percentage",
    fontSize: 9,
    fontColor: data => {
      const hexToRgb = hex => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            }
          : null;
      };
      const rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
      const threshold = 140;
      const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
      return luminance > threshold ? "black" : "white";
    },
    precision: 0
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

const Portfolio = ({ chartId }) => (
  <div>
    <Row className="profile-row">
      <div className="profile-image-container">
        <div className="profile-image" />
      </div>
      <Col>
        <div className="portfolio-name">Portfolio Name</div>
        <div className="user">by User Name</div>
      </Col>
    </Row>
    <Row>
      <Doughnut
        id={`PieChart${chartId}`}
        data={doughnutData}
        options={doughnutOptions}
        width={70}
        height={70}
        style={{
          maxWidth: "300px",
          maxHeight: "300px",
          margin: "auto",
          height: "300px"
        }}
      />
    </Row>
    <Row>
      <Line
        id={`LineChart${chartId}`}
        data={lineData}
        options={lineOptions}
        width={200}
        height={50}
        style={{
          maxHeight: "200px",
          height: "300px"
        }}
      />
    </Row>
  </div>
);

export default Portfolio;
