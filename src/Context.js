import React, { createContext } from 'react';

const Context = createContext({});

const Provider = ({ children, users, setUsers }) => {
  // Github API index doesn't start at one, so we'll need to find another way

  const accessUser = (str, index = undefined, state = []) => {
    if (str === '') return;
    const copy = [...state];
    if (!copy[index]["tags"]) {
      copy[index]["tags"] = [];
    }
    copy[index]["tags"].push(str);

    return copy;
  }

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        accessUser
      }}
    >
      { children }
    </Context.Provider>
  )
}

export default Context;
export { Provider }