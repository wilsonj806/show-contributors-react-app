import React, { useContext, useState, useEffect } from 'react';
import Context from '../Context';

function ListEle({ children, user, ...props}) {
  const { login, html_url, contributions, index, tags, starred } = user;
  console.log(starred)

  // Context
  const context = useContext(Context);

  const { addStars, accessUser, users, setUsers } = context;

  // Local State
  const [ clicked, setClicked ] = useState(false);
  const [ tag, setTag ] = useState('');

  // Side Effects
  useEffect(() => {
    if (clicked === true && !starred) {
      // console.log(user.starred_url);
      const regex =/.*(?=((\{.*\}){2}))/gi;
      const match = user.starred_url.match(regex)[0] || null;
      addStars(match, user.index, users, setUsers);
    }
  }, [clicked])


  // Event handling
  const handleClick = () => setClicked(!clicked);

  const handleChange = (event) => setTag(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // console.log(index);
      const newArr = accessUser(tag, index, users);
      setUsers(d => newArr);
      setTag('');
    }
  }

  // Other rendered things
  const Tags = tags instanceof Array ? tags.map((tag, i) => (
    <div className="tag" key={i}>{ tag }</div>
  )) : undefined;

  const MapRepos = (repo) => {
    const { name, url } = repo;
    return (
      <li>
        <a href={ url } alt="URL to repository">{ name }</a>
      </li>
    )
  };

  const Starred = starred ? (
    <ul>
      { starred.map(MapRepos) }
    </ul>
  ) : undefined;

  const Expanded = (
    <div className="expanded-display">
      { Starred }
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