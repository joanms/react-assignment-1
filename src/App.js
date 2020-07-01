import React from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput userName="Joan"/>
      <UserOutput userName="Joan"/>
      <UserOutput userName="Joan"/>
    </div>
  );
}

export default App;
