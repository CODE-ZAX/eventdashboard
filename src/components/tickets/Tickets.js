import React from "react";
import { useData } from "../../context/DataContext";
import classes from "./Tickets.module.css";
const Tickets = ({}) => {
  const { tickets } = useData();
  return (
    <div>
      <h5 className="text-center pt-2">Active Tickets</h5>
      <div className={" " + classes.activeTickets}>
        <ul className={classes.ticketHolder}>
          {tickets.map((ticket) => (
            <li className={classes.ticket}>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
