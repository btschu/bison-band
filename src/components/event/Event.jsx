import React from "react";
import { eventData } from "./allEvents.js";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./event.css";

const Event = () => {
  const eventItem = eventData.map((event) => (
    <div
      key={event.id}
      className="event-container"
      data-aos="zoom-in"
      data-aos-delay="100"
      value={new Date(event.dateTime)}
    >
      <div className="date-container">
        <span className="month">{event.month}</span>
        <span className="day">{event.day}</span>
        <span className="weekday">{event.weekday}</span>
      </div>
      <div className="event-info-container">
        <h2 className="event-name">{event.eventName}</h2>
        <div className="time-location-container">
          <p>
            <AiOutlineClockCircle
              className="react-icon"
              color="#2d2c2c"
              size={18}
            />
            {event.time}
            <br></br>
            <FaMapMarkerAlt className="react-icon" color="#2d2c2c" size={18} />
            {event.location}
          </p>
        </div>
      </div>
    </div>
  ));
  return <div id="card">{eventItem}</div>;
};

export default Event;
