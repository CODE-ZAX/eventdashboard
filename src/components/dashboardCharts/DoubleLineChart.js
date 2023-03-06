import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Last Year",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "2022",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#1B2030dd",
      borderColor: "#1B203099",
    },
    {
      label: "2023",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#7634f4dd",
      backgroundColor: "#7634f4aa",
    },
  ],
};

export function DoubleLineChart() {
  return (
    <div className={classes.lineChart + " "}>
      <Line options={options} data={data} />
    </div>
  );
}
