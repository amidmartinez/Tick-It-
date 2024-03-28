import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Events</h2>
      {events.length ? (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Type: {event.type}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default EventList;
