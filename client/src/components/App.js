import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <TopNav />
      <div className="container">
        <ItemsBody />
      </div>
    </div>
  );
}

export default App;
