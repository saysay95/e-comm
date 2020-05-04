import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './page/homepage/Homepage'
import ShopPage from './page/shop/Shop';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
       </Switch>
    </div>
  );
}

export default App;
