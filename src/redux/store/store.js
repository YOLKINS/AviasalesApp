import { configureStore } from '@reduxjs/toolkit';

import { reducerFilters } from '../reducer/filters-reducer/reducerFilters';
import { reducerTabs } from '../reducer/tabs-reducer/reducerTabs';
import { reducerTickets } from '../reducer/tickets-reducer/reducerTickets';

const store = configureStore({
  reducer: {
    filters: reducerFilters,
    tabs: reducerTabs,
    tickets: reducerTickets,
  },
});

export default store;
