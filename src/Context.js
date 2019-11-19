import React, { createContext } from 'react';

const Context = createContext({});

const Provider = ({ children, users, setUsers }) => {
  // Github API index doesn't start at one, so we'll need to find another way
  return (
    <Context.Provider
      value={{
        users,
        setUsers
      }}
    >
      { children }
    </Context.Provider>
  )
}

export default Context;
export { Provider }