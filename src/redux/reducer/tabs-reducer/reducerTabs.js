/* eslint-disable indent */
import { tabsSet } from '../../types/types';

import { changeTab } from './reducerFuncTabs';

const initialState = {
  tabs: [
    {
      id: 1,
      title: 'САМЫЙ ДЕШЕВЫЙ',
      disabled: true,
    },
    {
      id: 2,
      title: 'САМЫЙ БЫСТРЫЙ',
      disabled: false,
    },
    {
      id: 3,
      title: 'ОПТИМАЛЬНЫЙ',
      disabled: false,
    },
  ],
};

export const reducerTabs = (state = initialState, action) => {
  switch (action.type) {
    case tabsSet:
      return {
        ...state,
        tabs: changeTab(state.tabs, action.payload),
      };

    default:
      return state;
  }
};
