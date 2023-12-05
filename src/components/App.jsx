import React from 'react';

import Logo from './logo/Logo';
import './App.scss';
import AppTickets from './app-tickets/AppTickets';

function App() {
  return (
    <div className="app">
      <Logo />
      <AppTickets />
    </div>
  );
}

export default App;
