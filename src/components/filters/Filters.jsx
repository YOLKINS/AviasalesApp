import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { filterTickets } from '../../redux/reducer/tickets-reducer/reducerTickets';
import { setCheckbox } from '../../redux/actions/actions';

import './Filters.scss';

const Filters = (state) => {
  const title = 'Количество пересадок';

  console.log('Filters >', state);

  useEffect(() => {
    state.onFilterTickets(state.selectedCheckBoxesId);
  }, [state.selectedCheckBoxesId]);

  const filterContent = (
    <>
      <form>
        <p>{title}</p>
        {state.checkboxes.map((item) => (
          <div className="check" key={item.id}>
            <input
              id={item.id}
              type="checkBox"
              onChange={() => {
                state.onChangeFilterState(item.id);
              }}
              checked={item.active}
            />
            <label htmlFor={item.id}>{item.title}</label>
            <br />
          </div>
        ))}
      </form>
    </>
  );

  return <section className="filters">{filterContent}</section>;
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeFilterState: (id) => {
      console.log('click', id);
      dispatch(setCheckbox(id));
    },
    onFilterTickets: (selectedCheckBoxesId) => {
      dispatch(filterTickets(selectedCheckBoxesId));
    },
  };
}

function mapStateToProps(state) {
  return {
    checkboxes: state.filters.checkboxes,
    selectedCheckBoxesId: state.filters.selectedCheckBoxesId,
    tickets: state.tickets,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
