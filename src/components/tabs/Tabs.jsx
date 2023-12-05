/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Tabs.scss';

import { fetchTickets, sortTickets } from '../../redux/reducer/tickets-reducer/reducerTickets';
import { setTab, showMoreTickets } from '../../redux/actions/actions';
import Spinner from '../a-components/spinner/spinner';
import Collection from '../collection/Collection';

const Tabs = (state) => {
  console.log('Tabs >', state);

  useEffect(() => {
    state.onFetchTickets();
    console.log('useEffect onFetchTickets() inti Tabs');
  }, []);

  useEffect(() => {
    state.onSortTickets();
    console.log('useEffect onSortTickets() into Tabs');
  }, [state.tickets.currentTabId]);

  return (
    <>
      <div className="tabs">
        {state.tabs.map((tab, current) => (
          <button
            className="buttonActive"
            key={current}
            id={tab.id}
            disabled={tab.disabled}
            onClick={() => {
              state.onChangeTab(tab.id);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="tabs__content">
          {state.tickets.isLoading && <Spinner />}
          {!state.tickets.displayedTickets.length && (
            <div className="message">Рейсов, подходящих под заданные фильтры, не найдено</div>
          )}
          <Collection tickets={state.tickets.displayedTickets} />
        </div>
        {state.tickets.displayedTickets.length !== state.tickets.filteredTickets.length && (
          <button type="button" className="buttonMore" onClick={() => state.onButtonMore(true)}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        )}
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeTab: (id) => {
      console.log('click tab', id);
      dispatch(setTab(id));
    },
    onButtonMore: (bool) => {
      console.log('click more');
      dispatch(showMoreTickets(bool));
    },
    onFetchTickets: () => {
      console.log('fetch tickets');
      dispatch(fetchTickets());
    },
    onSortTickets: () => {
      console.log('sort tickets');
      dispatch(sortTickets());
    },
  };
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs.tabs,
    tickets: state.tickets,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
