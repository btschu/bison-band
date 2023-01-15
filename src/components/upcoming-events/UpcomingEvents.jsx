import Event from "../event/Event";
import { eventData } from "./allEvents";

import "./upcoming-events.css";

const UpcomingEvents = () => {
  const eventDataCopy = eventData; //made a copy of your DATA sop that I don't manipulate on accident
  let updatedEventObjects = [];
  let upcomingDates = [];
  let fullMonth = [];

  //filter out expired dates and set to an empty array
  const findUpcomingDates = (events) => {
    const today = Math.floor(new Date().getTime() / 1000);
    let upcomingEvents = events.filter((e) => e.unixTimeStamp > today);
    upcomingDates.push(upcomingEvents);
  };

  //build a factory that creates unix timestamps
  const unixFactory = (events) => {
    //takes in array of objects
    events.forEach((e) => {
      let unixDate = Math.floor(new Date(e.dateTime).getTime() / 1000);
      e.unixTimeStamp = unixDate; //update Object to have a UNIX timestamp; which allows for easy > or < comparison
      updatedEventObjects.push(e); //appends new array with each updated Object
    });
  };

  // these three functions are used to modify the date info from dateTime to display correctly on the date-container
  const monthValue = function (events) {
    events.forEach((e) => {
      let monthView = new Date(e.dateTime).toLocaleString("default", { month: "long" });      
      console.log(monthView);
      console.log(fullMonth);
      fullMonth.push(monthView)
    });
  };

//   const dayValue = function (events) {
//     events.forEach((e) => {
//       const getDay = new Date(e.dateTime);
//       // console.log(getDay.getDate());
//       return getDay.getDate();
//     });
//   };

//   const weekdayValue = function (events) {
//     events.forEach((e) => {
//       const dayOfWeek = new Date(e.dateTime).getDay();
//       return isNaN(dayOfWeek)
//         ? null
//         : [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//           ][dayOfWeek];
//     });
//   };

  //call my functions
  unixFactory(eventDataCopy);
  findUpcomingDates(updatedEventObjects);
//   these are the three I added
//   monthValue(eventDataCopy);
//   dayValue(updatedEventObjects);
//   weekdayValue(updatedEventObjects);

  return (
    <div className="upcoming-events-container gradient__bg">
      <h1>Upcoming Events</h1>
      <div id="upcoming-events" className="card-container">
        {upcomingDates.map((event) => (
          <Event event={event} key={event.id} monthValue={monthValue(eventDataCopy)} /> //added monthValue as a prop to try it out
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
