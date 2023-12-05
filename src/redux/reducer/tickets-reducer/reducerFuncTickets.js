import { tabs } from '../../сonstants/tabsConstants';
import { filters } from '../../сonstants/filtersConstants';

export const filterFuncTickets = (state, action) => {
  const prevState = { ...state };
  const selectedCheckBoxes = action.payload;
  let mainCheckBox = null;
  mainCheckBox = selectedCheckBoxes && selectedCheckBoxes.find((checkBox) => checkBox === -1);

  if (!selectedCheckBoxes.length) {
    return {
      ...state,
      filteredTickets: [],
    };
  } else if (mainCheckBox) {
    return {
      ...state,
      filteredTickets: [...prevState.ticketsData],
    };
  } else {
    const selectedFilters = filters.filter((filter) => selectedCheckBoxes.includes(filter.id));
    const filterFunctionsProp = selectedFilters.map((checkbox) => checkbox.filterFunction);

    let resultArray = [];
    filterFunctionsProp.forEach((func) => {
      resultArray.push(...func(prevState.ticketsData));
    });

    return {
      ...state,
      filteredTickets: resultArray,
    };
  }
};

export const sortTicketsSucceesFunc = (state, action) => {
  const tab = tabs.find((item) => item.id === action.payload);
  const sortFunction = tab.sortFunction;
  const sortedTickets = sortFunction(state.filteredTickets);

  return {
    ...state,
    filteredTickets: sortedTickets,
  };
};

export const showMore = (state, action, limit) => {
  const newTickets = state.filteredTickets.slice(limit * state.pageNumber - limit, limit * state.pageNumber);
  const prevTickets = !action.payload ? state.displayedTickets : [];

  return {
    ...state,
    displayedTickets: [...prevTickets, ...newTickets],
    pageNumber: state.pageNumber + 1,
  };
};
