import React from 'react';
import Event from '../event/Event'
import './upcoming-events.css';

const UpcomingEvents = () => {
    return (
        <div id="upcoming-events" className="main-container">
            <h1>Upcoming Events</h1>
            <Event />
        </div>
    );
};

export default UpcomingEvents;