import React from 'react';

import Tabs from '../tabs/Tabs';
import Collection from '../collection/Collection';
import Button from '../a-components/button/Button';

const Tickets = () => {
  const count = 5;
  const title = `показать еще ${count} минут`;
  return (
    <section className="tickets">
      <Tabs />
      <Collection />
      <Button>{title}</Button>
    </section>
  );
};

export default Tickets;
