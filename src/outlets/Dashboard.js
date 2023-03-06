import React from "react";
import { DoubleLineChart } from "../components/dashboardCharts/DoubleLineChart";
import { DougnutChart } from "../components/dashboardCharts/DoughnutChart";
import { LineChart } from "../components/dashboardCharts/LineChart";
import classes from "./Dashboard.module.css";
import Tickets from "../components/tickets/Tickets";
import CountUp from "react-countup";

import {
  FaUserAlt,
  FaUserCheck,
  FaTicketAlt,
  FaDollarSign,
} from "react-icons/fa";
import Table from "../components/dashboardCharts/Table";
import { useData } from "../context/DataContext";

const Dashboard = () => {
  const { tickets, tableData } = useData();
  return (
    <div className={"p-3 " + classes.dashboardMain}>
      <h4>
        <strong>Dashboard</strong>
      </h4>
      <h5 className="my-3">Overall Status</h5>
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className={classes.bg + " p-2 " + classes.statsHolder}>
            <FaUserAlt size={28} />
            <div>
              <CountUp end={15} />
              <span>K+</span>
            </div>
            <h5>Users</h5>
          </div>
          <div className={classes.bg + " p-2 " + classes.statsHolder}>
            <FaUserCheck size={28} />
            <CountUp end={1153} />
            <h5>Active Users</h5>
          </div>
          <div className={classes.bg + " p-2 " + classes.statsHolder}>
            <FaTicketAlt size={28} />
            <CountUp end={63} />
            <h5>Tickets</h5>
          </div>
          <div className={classes.bg + " p-2 " + classes.statsHolder}>
            <FaDollarSign size={28} />
            <div>
              <CountUp end={20} />
              <span>M+</span>
            </div>
            <h5>Revenue</h5>
          </div>
        </div>
      </div>
      <h5 className="my-3">Tickes Statistics</h5>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-evenly">
          <div className={"me-md-4 mb-4 " + classes.bg}>
            <DougnutChart />
          </div>
          <div className={" " + classes.bg}>
            <Tickets tickets={tickets} />
          </div>
        </div>
        <h5 className="my-3">Users Statistics</h5>
        <div className="d-flex flex-wrap ">
          <div className={" " + classes.bg}>
            <LineChart />
          </div>
          <div className={" " + classes.bg}>
            <DoubleLineChart />
          </div>
        </div>
        <div className="mt-5 container">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
