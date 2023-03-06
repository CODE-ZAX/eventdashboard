import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import classes from "./LineChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Year 2023",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Active Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#7634f4dd",
      backgroundColor: "#7634f4aa",
    },
  ],
};

export function LineChart() {
  return (
    <div className={classes.lineChart + " d-flex align-items-center"}>
      <Line options={options} data={data} />
    </div>
  );
}
