import React from "react";
import classes from "./Tickets.module.css";
import poker from "../assets/images/poker.png";
import { BsCalendarEventFill, BsCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
const Tickets = () => {
  const ticket = {
    validity: "01 Jan 2023 | 8:00 PM",
    title: "Best Poker Event Title",
    location: "Las Angel, USA",
    image: poker,
  };

  const ls = [1, 2, 3, 4, 5, 6];

  const TICK = (
    <div className={classes.ticket + " me-3"}>
      <div className={classes.ticketDetails}>
        <h6>{ticket.title}</h6>
        <div>
          <small>{ticket.validity}</small>
        </div>
        <div>
          <small>{ticket.location}</small>
        </div>
      </div>
      <div className={classes.ticketImage}>
        <img src={ticket.image} alt="" />
      </div>
    </div>
  );

  return (
    <div className="p-3 container ">
      <h4 className={classes.mainText + " mb-3"}>
        <strong>Tickets</strong>
      </h4>
      <h5>Search</h5>
      <nav className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">ID</span>
          <input type="text" className="form-control" placeholder="Search Id" />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <BsCalendarEventFill size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Event"
          />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <BsCalendarDateFill size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Date"
          />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <IoLocationSharp size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Location"
          />
        </div>
        <div>
          <button className={"btn " + classes.btnCustom}>Clear</button>
        </div>
      </nav>
      <h5 className="my-3">Active Tickets</h5>
      <div className="d-flex justify-content-evenly align-items-center">
        <div className={"container"}>
          <div className="d-flex flex-wrap justify-content-evenly">
            {ls.map((elem) => {
              return TICK;
            })}
          </div>
        </div>
      </div>

      <nav
        className={
          "mt-4 d-flex align-items-center justify-content-center " +
          classes.page
        }
        aria-label="users navigation "
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tickets;
