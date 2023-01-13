import React from 'react';
import Event from '../event/Event'

import './upcoming-events.css';

const UpcomingEvents = () => {
    return (
        <div className="upcoming-events-container gradient__bg">
            <h1>Upcoming Events</h1>
            <div id="upcoming-events" className="card-container">
                <Event />
            </div>
        </div>
    );
};

export default UpcomingEvents;