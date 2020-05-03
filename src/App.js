import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './page/homepage/Homepage'

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact='true' path='/' component={Homepage} />
          <Route exact='true' path='/shop/hats' component={HatsPage} />
       </Switch>
    </div>
  );
}

export default App;
