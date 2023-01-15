import Event from '../event/Event'
import { eventData } from "./allEvents";

import './upcoming-events.css';

function UpcomingEvents() {
    const eventDataCopy = eventData;  //made a copy of your DATA sop that I don't manipulate on accident
    let updatedEventObjects = []
    let upcomingDates = []


//filter out expired dates and set to an empty array
    function findUpcomingDates(events) {
        const today = Math.floor(new Date().getTime() / 1000)
        let upcomingEvents = events.filter((e) => e.unixTimeStamp > today)
        upcomingDates.push(upcomingEvents)
    }

//build a factory that creates unix timestamps
    function unixFactory(events) {  //takes in array of objects
        events.forEach((e) => {
            let unixDate = Math.floor(new Date(e.dateTime).getTime() / 1000)
            e.unixTimeStamp = unixDate;  //update Object to have a UNIX timestamp; which allows for easy > or < comparison
            updatedEventObjects.push(e)  //appends new array with each updated Object
        })
    }
   
    unixFactory(eventDataCopy) //call my functions
    findUpcomingDates(updatedEventObjects);

    return (
        <div className="upcoming-events-container gradient__bg">
            <h1>Upcoming Events</h1>
            <div id="upcoming-events" className="card-container">
                {upcomingDates.map((event) => (
                    <Event event={event}/>
                ))}   
            </div>       
        </div>
    );
};

export default UpcomingEvents;