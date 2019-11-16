import React, { useState, useEffect } from 'react';

function Display() {
  // Local State
  const [ users, setUsers ] = useState([]);

  // Fetch data on load
  useEffect(() => {
    async function asyncFetch() {
      const body = await fetch('https://api.github.com/repos/microsoft/typescript/contributors').then(res => res.json());
      console.log(body);
      setUsers(body);
    }

    asyncFetch();
  }, [])
  const ListEles = users.map((user) => {
    return (
      <li>
        <img
          style={{
            width: '45%',
            height: '45%'
          }}
          src={ user.avatar_url }
          alt="avatar"
        />
        <a href={ user.html_url}>Github Profile</a>
        <p>{ user.login }</p>
        <p>{ user.contributions }</p>
        <p>{ user.login }</p>
      </li>
    )
  })
  return (
    <div className="user-display">
      Hello There!
      <ul>
        { ListEles }
      </ul>
    </div>
  )
}

export default Display;