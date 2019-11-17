import React from 'react';

function ListEle({ children, ...props}) {

  return (
    <li className="single-profile">
      { children }
    </li>
  )
}

export default ListEle;