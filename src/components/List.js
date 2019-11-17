import React from 'react';
import ListEle from './ListEle';

function List({ children, users = [], ...props }) {
  console.log(props);

  const ListEles = users.map((user) => {
    return (
      <ListEle>
        <img
          style={{
            width: '45%',
            height: '45%'
          }}
          src={ user.avatar_url }
          alt="avatar"
        />
        <h3>{ user.login }</h3>
        <a href={ user.html_url}>Github Profile</a>
        <p>{ user.contributions }</p>
      </ListEle>
    )
  })
  return (
    <ul className="">
      { ListEles }
    </ul>
  )
}

export default List;