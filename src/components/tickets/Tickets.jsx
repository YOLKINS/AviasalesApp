import React from 'react';
import { Online, Offline } from 'react-online-status';

import './Tickets.scss';
import { NetworkLost } from '../a-components/errors/NetworkLost';
import Tabs from '../tabs/Tabs';

const Tickets = () => {
  return (
    <section className="tickets">
      <Online>
        <Tabs />
      </Online>
      <Offline>
        <NetworkLost />
      </Offline>
    </section>
  );
};

export default Tickets;
