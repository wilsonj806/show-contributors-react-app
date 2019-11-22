import React from 'react';
import ListEle from './ListEle';

import './list.css';

function List({ children, users = [], ...props }) {
  const ListEles = users.map((user, i) => {
    return (
      <ListEle key={ i } user={ user }/>
    )
  })
  return (
    <ul className="contributor-list">
      { ListEles }
    </ul>
  )
}

export default List;