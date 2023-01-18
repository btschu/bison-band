import React from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./event.css";

// added monthValue here and on line 26
const Event = (event) => {
  const events = event.event;

  const eventItem = events.map((event) => (
    <div key={event.id}>
      <time
        id="event-data"
        className="event-date"
        dateTime={new Date(event.dateTime)}
      >
        <div
          className="event-container animate pop-delay-{event.id}"
          data-aos="zoom-in"
          data-aos-delay="100"
          // value={new Date(event.dateTime)}
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
                  color="#c7a877"
                  size={18}
                />
                {event.time}
                <br></br>
                <FaMapMarkerAlt
                  className="react-icon"
                  color="#c7a877"
                  size={18}
                />
                {event.location}
              </p>
            </div>
          </div>
        </div>
      </time>
    </div>
  ));
  return <div id="card">{eventItem}</div>;
};

export default Event;
