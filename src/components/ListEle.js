import React from 'react';

function ListEle({ children, ...props}) {

  return (
    <li className="">
      { children }
    </li>
  )
}

export default ListEle;