import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Homepage from './page/homepage/Homepage'
import ShopPage from './page/shop/Shop';
import CheckoutPage from './page/checkout/Checkout'
import Header from './component/header/Header'
import SignInAndSignUp from './page/sign-in-and-sign-up/SignInAndSignUp'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });
      }
      else
      {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render() 
  {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' 
                   render={() => this.props.currentUser ? (
                     <Redirect to='/' />
                     ) : (
                       <SignInAndSignUp/> ) }/>
            <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
