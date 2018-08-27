import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/login' component={ Login } />
          <Redirect from='/login' to='/' />
          <Route exact path='/register' component={ Register } />
          <Redirect from='/register' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
