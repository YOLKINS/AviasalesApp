/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import { checkBoxSet } from '../../types/types';

import { changeFilterState, changeSelectedState } from './reducerFuncFilters';

const initialState = {
  checkboxes: [
    {
      id: -1,
      title: 'Все',
      active: false,
    },
    {
      id: 0,
      title: 'Без пересадок',
      active: false,
    },
    {
      id: 1,
      title: '1 пересадка',
      active: false,
    },
    {
      id: 2,
      title: '2 пересадки',
      active: false,
    },
    {
      id: 3,
      title: '3 пересадки',
      active: false,
    },
  ],
  selectedCheckBoxesId: [],
};

export const reducerFilters = (state = initialState, action) => {
  switch (action.type) {
    case checkBoxSet:
      const updatedCheckboxes = changeFilterState(state.checkboxes, action);
      const updatedSelectedCheckBoxesId = changeSelectedState(updatedCheckboxes);

      return {
        ...state,
        checkboxes: updatedCheckboxes,
        selectedCheckBoxesId: updatedSelectedCheckBoxesId,
      };

    default:
      return state;
  }
};
