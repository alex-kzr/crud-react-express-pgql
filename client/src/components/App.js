import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ItemsBody} />
        </Switch>          
      </div>
    </BrowserRouter>
  );
}

export default App;
