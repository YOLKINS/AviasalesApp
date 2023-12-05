import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store/store';
import Filters from '../filters/Filters';
import Tickets from '../tickets/Tickets';

const AppTickets = () => {
  return (
    <div className="app__tickets">
      <Provider store={store}>
        <Filters />
        <Tickets />
      </Provider>
    </div>
  );
};

export default AppTickets;
