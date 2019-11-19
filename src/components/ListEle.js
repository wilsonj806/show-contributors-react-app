import React from 'react';

function ListEle({ children, user, ...props}) {

  return (
    <li className="single-profile">
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
    </li>
  )
}

export default ListEle;