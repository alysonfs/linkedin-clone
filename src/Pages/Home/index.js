import React from 'react';
import './Home.css';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Feed from '../../Components/Feed';

function App () {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
