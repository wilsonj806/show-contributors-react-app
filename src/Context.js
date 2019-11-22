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

  const addStars = async (uri = undefined, index = undefined, state = [], setState = undefined) => {
    const copy = [ ...state ];
    try {
      const res = await fetch(uri).then(res => res.json());
      console.log(res);
      const starred = res.map(repo => {
        const { html_url: url, name  } = repo;
        return { url, name }
      })
      copy[index]["starred"] = starred;
      setState(copy);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        accessUser,
        addStars
      }}
    >
      { children }
    </Context.Provider>
  )
}

export default Context;
export { Provider }