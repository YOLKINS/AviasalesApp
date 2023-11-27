import React from 'react';

import Filters from '../filters/Filters';
import Tickets from '../tickets/Tickets';

const AppTickets = () => {
  return (
    <div className="app__tickets">
      <Filters />
      <Tickets />
    </div>
  );
};

export default AppTickets;
