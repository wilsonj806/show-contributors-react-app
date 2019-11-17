import React from 'react';
import ListEle from './ListEle';

import './list.css';

function List({ children, users = [], ...props }) {
  console.log(users);

  const ListEles = users.map((user, i) => {
    return (
      <ListEle key={ i }>
          <div className="avatar-wrapper">
            <img
              className="avatar"
              src={ user.avatar_url }
              alt="avatar"
            />
          </div>
          <div className="list-content-wrapper">
            <h3 className="username">{ user.login }</h3>
            <a className="profile-info" href={ user.html_url}>Github Profile</a>
            <p className="profile-info">{ 'Number of contributions: ' + user.contributions }</p>
          </div>
      </ListEle>
    )
  })
  return (
    <ul className="contributor-list">
      { ListEles }
    </ul>
  )
}

export default List;