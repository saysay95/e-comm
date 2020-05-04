import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './page/homepage/Homepage'
import ShopPage from './page/shop/Shop';
import Header from './component/header/Header'
import SignInAndSignUp from './page/sign-in-and-sign-up/SignInAndSignUp'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor()
  {
    super();
    this.state = { currentUser : null};
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser : user}));
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render() 
  {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
