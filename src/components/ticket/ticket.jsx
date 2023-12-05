import React from 'react';
import { format, addMinutes } from 'date-fns';

import './ticket.scss';

const Ticket = ({ price, carrier, segments }) => {
  const formatTime = (date) => format(new Date(date), 'HH:mm');
  const formatDuration = (duration) => format(addMinutes(new Date(0), duration), 'HHч mmм');

  const renderSegment = (segment) => {
    const { origin, destination, date, duration, stops } = segment;

    const formattedTime = formatTime(date);
    const formattedResult = formatTime(addMinutes(new Date(date), duration));
    const formattedDuration = formatDuration(duration);
    const formattedStops = stops.join(', ');

    return (
      <div className="flightLine">
        <div className="infoDiv">
          {origin} - {destination}
        </div>
        <div className="infoDiv">В ПУТИ</div>
        <div className="infoDiv">ПЕРЕСАДКИ: {stops.length}</div>
        <div className="infoDiv infoDiv_black">
          {formattedTime} - {formattedResult}
        </div>
        <div className="infoDiv infoDiv_black">{formattedDuration}</div>
        <div className="infoDiv infoDiv_black">{formattedStops}</div>
      </div>
    );
  };

  return (
    <li className="cover">
      <h1 className="price">{price} ₽</h1>
      <div className="logo">
        <img src={`http://pics.avs.io/130/70/${carrier}.png`} alt="air-logo" />
      </div>

      <div className="ticketInfoFor">{renderSegment(segments[0])}</div>
      <div className="ticketInfoBack">{renderSegment(segments[1])}</div>
    </li>
  );
};

export default Ticket;
