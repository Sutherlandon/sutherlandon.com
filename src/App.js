import React, { Component } from 'react';
import { Switch, Redirect, Router, Route } from 'react-router-dom';
import history from './api/history';

// import './App.scss';

import { Blog, Home, Gg } from './pages';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route path='/app/home' component={Home} />
          <Route path='/app/blog' component={Blog} />
          <Route path='/app/gg' component={Gg} />
          <Redirect to='/app/home' />
        </Switch>
      </Router>
    );
  }
}

export default App;
