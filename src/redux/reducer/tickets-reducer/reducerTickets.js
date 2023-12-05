/* eslint-disable indent */
import { _apiBase } from '../../../api/AviasalesAPI';
import {
  loadingTickets,
  fetchTicketsSuccessWithData,
  filterTicketsFunc,
  sortTicketsSuccessWithId,
  showMoreTickets,
} from '../../actions/actions';
import {
  tabsSet,
  isLoadingTickets,
  fetchTicketsSuccess,
  filterFunc,
  sortTicketsSuccess,
  isShowMoreTickets,
} from '../../types/types';

import { filterFuncTickets, sortTicketsSucceesFunc, showMore } from './reducerFuncTickets';

const limit = 5;

export const initialState = {
  ticketsData: [],
  isLoading: null,
  displayedTickets: [],
  filteredTickets: [],
  pageNumber: 1,
  currentTabId: 1,
};

export const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case fetchTicketsSuccess:
      return {
        ...state,
        ticketsData: [...state.ticketsData, ...action.payload.tickets],
      };

    case isLoadingTickets:
      return {
        ...state,
        isLoading: action.payload,
      };

    case filterFunc:
      return filterFuncTickets(state, action);

    case sortTicketsSuccess:
      return sortTicketsSucceesFunc(state, action);

    case isShowMoreTickets:
      return showMore(state, action, limit);

    case tabsSet:
      return {
        ...state,
        currentTabId: action.payload,
      };

    default:
      return state;
  }
};

let searchQuery = '';

export function fetchTickets() {
  return async function ticketFetching(dispatch) {
    dispatch(loadingTickets(true));

    try {
      if (!searchQuery) {
        const searchResponse = await fetch(`${_apiBase}/search`);
        if (!searchResponse.ok) {
          throw new Error('Ошибка при выполнении запроса search Id');
        }
        const searchIdGenerator = await searchResponse.json();

        searchQuery = Object.values(searchIdGenerator);
      }
      const ticketResponse = await fetch(`${_apiBase}/tickets?searchId=${searchQuery}`);

      if (!ticketResponse.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }
      const data = await ticketResponse.json();
      dispatch(fetchTicketsSuccessWithData(data));
      if (!data.stop) {
        dispatch(fetchTickets());
      } else {
        dispatch(loadingTickets(false));
      }
    } catch (error) {
      console.error(error);
      dispatch(fetchTickets());
    }
  };
}

export function sortTickets() {
  return function (dispatch, getState) {
    const id = getState().tickets.currentTabId;
    dispatch(sortTicketsSuccessWithId(id));
    dispatch(showMoreTickets(true));
  };
}
export function filterTickets(selectedCheckBoxesId) {
  return function (dispatch) {
    dispatch(filterTicketsFunc(selectedCheckBoxesId));
    dispatch(sortTickets());
  };
}
