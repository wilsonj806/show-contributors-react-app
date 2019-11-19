import React, { useContext, useState } from 'react';
import Context from '../Context';

function ListEle({ children, user, index, ...props}) {
  const { login, html_url, contributions, id: githubId, tags } = user;
  // Context
  const context = useContext(Context);

  const { accessUser, users, setUsers } = context;
  // console.log('this is context users');
  // console.log(users);

  // Local State
  const [ clicked, setClicked ] = useState(false);
  const [ tag, setTag ] = useState('');

  // Event handling
  const handleClick = () => setClicked(!clicked);

  const handleChange = (event) => setTag(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(index);
      const newArr = accessUser(tag, parseInt(index), users);
      setUsers(d => newArr);
      setTag('');
    }
  }

  // Other rendered things
  const Tags = tags instanceof Array ? tags.map((tag, i) => (
    <div className="tag" key={i}>{ tag }</div>
  )) : undefined;

  const Expanded = (
    <div className="expanded-display">
      { 'Hello World' }
      <div className="wrap--tag">
        { Tags }
      </div>
      <input
        className="input--tag"
        id="add-tag-input"
        value={ tag }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder="Add tag"
      />
    </div>
  )

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
        <h3 className="username">{ login }</h3>
        <div className="btn--wrap"><button className="expand-btn" onClick={ handleClick }>+</button></div>
        <a className="profile-info" href={ html_url}>Github Profile</a>
        <p className="profile-info">{ 'Number of contributions: ' + contributions }</p>

        { clicked ? Expanded : undefined }
      </div>
    </li>
  )
}

export default ListEle;