import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import mockData from "../mock-data";

Chart.register(...registerables);

const BarChart = () => {
  const [chart, setChart] = useState(mockData);
  console.log(
    Object.entries(chart[0])
      .filter(
        (entry) =>
          entry[0].toLowerCase() !== "data" && entry[0].toLowerCase() !== "id"
      )
      .map((entry) => entry[1])
  );

  const url = "mock-data.js";

  const data = {
    labels: Object.keys(chart[0]).filter(
      (item) => item.toLowerCase() !== "data" && item.toLowerCase() !== "id"
    ),
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: Object.entries(chart[0])
          .filter(
            (entry) =>
              entry[0].toLowerCase() !== "data" &&
              entry[0].toLowerCase() !== "id"
          )
          .map((entry) => entry[1]),
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return <Bar data={data} config={config} />;
};

export default BarChart;
