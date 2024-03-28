import React from 'react';

const ticketDetail = ({ event }) => {
  return (
    <div className="ticket-detail">
      <h2>{event.title}</h2>
      <p>{event.price}</p>
      <p>{event.availability}</p>
    </div>
  );
};

export default ticketDetail;
