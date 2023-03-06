import React from "react";
import { DoubleLineChart } from "../components/dashboardCharts/DoubleLineChart";
import { DougnutChart } from "../components/dashboardCharts/DoughnutChart";
import { LineChart } from "../components/dashboardCharts/LineChart";
import classes from "./Dashboard.module.css";
import poker from "../assets/images/poker.png";
import Tickets from "../components/tickets/Tickets";
import CountUp from "react-countup";

import {
  FaUserAlt,
  FaUserCheck,
  FaTicketAlt,
  FaDollarSign,
} from "react-icons/fa";
import Table from "../components/dashboardCharts/Table";

const Dashboard = () => {
  const tickets = [
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
  ];
  const tableData = [
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
    {
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
    },
  ];
  return (
    <div className={"p-3 " + classes.dashboardMain}>
      <h4>
        <strong>Dashboard</strong>
      </h4>
      <h5 className="my-3">Overall Status</h5>
      <div>
        <div className="d-flex justify-content-evenly">
          <div className={classes.bg + " col-2 " + classes.statsHolder}>
            <FaUserAlt size={28} />
            <div>
              <CountUp end={15} />
              <span>K+</span>
            </div>
            <h5>Users</h5>
          </div>
          <div className={classes.bg + " col-2 " + classes.statsHolder}>
            <FaUserCheck size={28} />
            <CountUp end={1153} />
            <h5>Active Users</h5>
          </div>
          <div className={classes.bg + " col-2 " + classes.statsHolder}>
            <FaTicketAlt size={28} />
            <CountUp end={63} />
            <h5>Tickets</h5>
          </div>
          <div className={classes.bg + " col-2 " + classes.statsHolder}>
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
      <div className="row justify-content-around">
        <div className={"col-7 " + classes.bg}>
          <DougnutChart />
        </div>
        <div className={"col-4 p-28 " + classes.bg}>
          <Tickets tickets={tickets} />
        </div>
      </div>
      <h5 className="my-3">Users Statistics</h5>
      <div className="row justify-content-evenly">
        <div
          className={
            "col-5 d-flex align-items-center justify-content-center " +
            classes.bg
          }
        >
          <LineChart />
        </div>
        <div
          className={
            "col-5 d-flex align-items-center justify-content-center " +
            classes.bg
          }
        >
          <DoubleLineChart />
        </div>
      </div>
      <div className="mt-5 container">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
