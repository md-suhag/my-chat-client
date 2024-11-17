import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        // display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        // display: false,
      },
    },
  },
};

const labels = getLast7Days();
const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Chats",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <Line data={data} options={lineChartOptions}>
      Chart
    </Line>
  );
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 100,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats vs Group Chats",
        offset: 30,
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(75,12,192,0.4)"],
        borderColor: ["rgba(75,192,192,0.4)", "rgba(75,12,192,0.4)"],
        hoverBackgroundColor: ["rgba(75,192,192,0.8)", "rgba(75,12,192,0.8)"],
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={doughnutChartOptions}
      style={{ zIndex: 10 }}
    />
  );
};
export { LineChart, DoughnutChart };
