import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './page/homepage/Homepage'
import ShopPage from './page/shop/Shop';
import Header from './component/header/Header'
import SignInAndSignUp from './page/sign-in-and-sign-up/SignInAndSignUp'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
       </Switch>
    </div>
  );
}

export default App;
