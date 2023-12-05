import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Collection.scss';
import Ticket from '../ticket/ticket';

const Collection = ({ tickets }) => {
  return (
    <div className="collection">
      <ul className="collection__tickets">
        {tickets.map((item) => (
          <Ticket key={uuidv4()} price={item.price} carrier={item.carrier} segments={item.segments} />
        ))}
      </ul>
    </div>
  );
};

export default Collection;
