import React, { useState, useEffect } from 'react';

import List from '../components/List';

function Display() {
  // Local State
  const [ users, setUsers ] = useState([]);

  // Fetch data on load
  useEffect(() => {
    async function asyncFetch() {
      // Fetch from LocalStorage
      const local = window.localStorage.getItem('ts-contrib');

      // IF LocalStorage entry exists, set state
      // ELSE make GET request for the asset, then save to LocalStorage and set state
      if (local) {
        setUsers(JSON.parse(local));
      } else {
        const body = await fetch('https://api.github.com/repos/microsoft/typescript/contributors').then(res => res.json());
        const myStorage = window.localStorage;

        myStorage.setItem('ts-contrib', JSON.stringify(body));
        // console.log(body);
        setUsers(body);
      }
    }

    asyncFetch();
  }, [])

  return (
    <div className="user-display">
      <h1>TypeScript Repository Contributors</h1>
      <List users={ users }/>
    </div>
  )
}

export default Display;