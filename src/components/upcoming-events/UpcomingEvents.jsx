import Event from "../event/Event";
import { eventData } from "./allEvents";

import "./upcoming-events.css";

const UpcomingEvents = () => {
  const eventDataCopy = eventData;
  let updatedEventObjects = [];
  let upcomingDates = [];

  //filter out expired dates and set to an empty array
  const findUpcomingDates = (events) => {
    const today = Math.floor(new Date().getTime() / 1000);
    let upcomingEvents = events.filter((e) => e.unixTimeStamp > today);
    upcomingDates.push(upcomingEvents);
  };

  //build a factory that creates unix timestamps
  const unixFactory = (events) => {
    events.forEach((e) => {
      let unixDate = Math.floor(new Date(e.dateTime).getTime() / 1000);
      e.unixTimeStamp = unixDate; //update Object to have a UNIX timestamp; which allows for easy > or < comparison
      updatedEventObjects.push(e); //appends new array with each updated Object
    });
  };

  // these three functions are used to modify the date info from dateTime to display correctly on the date-container
  const monthValue = function (events) {
    events.forEach((e) => {
      let monthView = new Date(e.dateTime).toLocaleString("default", {
        month: "long",
      });
      e.month = monthView;
      updatedEventObjects.push(e);
    });
  };

  const dayValue = function (events) {
    events.forEach((e) => {
      let getDay = new Date(e.dateTime).getDate();
      e.day = getDay;
      updatedEventObjects.push(e);
    });
  };

  const weekdayValue = function (events) {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    events.forEach((e) => {
      let dayOfWeek = new Date(e.dateTime).getDay();
      e.weekday = weekday[dayOfWeek];
      updatedEventObjects.push(e);
    });
  };

  //call functions
  unixFactory(eventDataCopy);
  findUpcomingDates(updatedEventObjects);
  monthValue(updatedEventObjects);
  dayValue(updatedEventObjects);
  weekdayValue(updatedEventObjects);

  return (
    <div className="upcoming-events-container">
      <div className="parallax">
        {/* <h1>Test</h1> */}
      </div>
      <h1 className="">Upcoming Events</h1>
      <div id="upcoming-events" className="card-container">
        {upcomingDates.map((event) => (
          <Event event={event} key={event.id * 500} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
