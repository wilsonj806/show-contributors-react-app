import React, { useState, useEffect } from 'react';
import { Provider } from '../Context';


import List from '../components/List';

function Display() {
  // Local State
  const [ users, setUsers ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ filterTag, setFilterTag ] = useState('');

  // Fetch data on load
  useEffect(() => {
    async function asyncFetch() {
      // Fetch from LocalStorage
      // const local = window.localStorage.getItem('ts-contrib');

      // IF LocalStorage entry exists, set state
      // ELSE make GET request for the asset, then save to LocalStorage and set state
      // if (local) {
      //   setUsers(JSON.parse(local));
      // } else {
        const body = await fetch('https://api.github.com/repos/microsoft/typescript/contributors').then(res => res.json());
        // const myStorage = window.localStorage;

        // myStorage.setItem('ts-contrib', JSON.stringify(body));
        // console.log(body);
        setUsers(body);
      // }
    }

    asyncFetch();
  }, [])

  // Filter by name
  useEffect(() => {
    const escape = escapeSlash(filter);
    if (filter !== '' && filtered.length !== 0) {
      const filteredArr =  filtered.filter((student) => {
        const fullName = student.firstName + ' ' + student.lastName;

        const regex = new RegExp(escape, 'gi');
        return regex.test(fullName);
      });
      setFiltered(filteredArr);
    } else if (filter !== '') {
      const filteredArr =  users.filter((student) => {
        const fullName = student.firstName + ' ' + student.lastName;

        const regex = new RegExp(escape, 'gi');
        return regex.test(fullName);
      });
      setFiltered(filteredArr);
    }
  }, [filter])

  useEffect(() => {
    if (filter === '' && filterTag === '') {
      setFiltered([]);
    }
  }, [filter, filterTag])

  // Filter by tag
  useEffect(() => {
    const escape = escapeSlash(filterTag);

    if (filterTag !== '' && filtered.length !== 0) {
      const filteredArr =  filtered.filter((student) => {
        const regex = new RegExp(escape, 'gi');

        if (student.tags) {
          const search = student.tags.some((tag) => regex.test(tag));
          return search;
        } else {
          return false;
        }
      });
      setFiltered(filteredArr);
    } else if (filterTag !== '') {
      const filteredArr =  users.filter((student) => {
        const regex = new RegExp(escape, 'gi');

        if (student.tags) {
          const search = student.tags.some((tag) => regex.test(tag));
          return search;
        } else {
          return false;
        }
      });
      setFiltered(filteredArr);
    }
  }, [filterTag])

  // Event handlers
  const handleFilterInputChange = (event) => {
    setFilter(event.target.value)
  }

  const handleTagInputChange = (event) => {
    setFilterTag(event.target.value)
  }

  return (
    <Provider value={{
      users,
      setUsers
    }}>
      <div className="display-card">
        <div className="head-wrapper">
          <h1 className="primary-heading">TypeScript Repository Contributors</h1>
          <input
            className="input--main"
            id="name-input"
            value={ filter }
            onChange={ handleFilterInputChange }
            placeholder="Search by Name"
          />
          <input
            className="input--main"
            id="tag-input"
            value={ filterTag }
            onChange={ handleTagInputChange }
            placeholder="Search by Tag"
          />
        </div>
        <div className="user-display">
          <List users={ users }/>
        </div>
      </div>
    </Provider>
  )
}

// Need to escape \ otherwise the regex crashes
function escapeSlash(str = '') {
  const regex = /\\/gi;
  const copy = str.replace(regex, '%5C');
  return copy;
}

export default Display;