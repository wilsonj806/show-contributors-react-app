import React from 'react';

import PrimaryDisplay from './containers/PrimaryDisplay';
import List from './components/List';

function App() {
  return (
    <div
      className="card"
      style={{
        width: '50%',
      }}
    >
      Hello World
      <PrimaryDisplay/>
    </div>
  );
}

export default App;
