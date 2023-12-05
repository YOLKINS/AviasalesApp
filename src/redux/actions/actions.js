import {
  checkBoxSet,
  tabsSet,
  isLoadingTickets,
  fetchTicketsSuccess,
  filterFunc,
  sortTicketsSuccess,
  isShowMoreTickets,
} from '../types/types';

export const setCheckbox = (id) => ({
  type: checkBoxSet,
  payload: id,
});

export const setTab = (id) => ({
  type: tabsSet,
  payload: id,
});

export const loadingTickets = (bool) => ({
  type: isLoadingTickets,
  payload: bool,
});

export const fetchTicketsSuccessWithData = (data) => ({
  type: fetchTicketsSuccess,
  payload: data,
});

export const filterTicketsFunc = (selectedCheckBoxesId) => ({
  type: filterFunc,
  payload: selectedCheckBoxesId,
});

export const sortTicketsSuccessWithId = (id) => ({
  type: sortTicketsSuccess,
  payload: id,
});

export const showMoreTickets = (bool) => ({
  type: isShowMoreTickets,
  payload: bool,
});
