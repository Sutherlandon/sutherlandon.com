import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import history from './api/history';

// import './App.scss';

import { Blog, Home, Gg } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
        <Switch>
          <Route path='/app/home' component={Home} />
          <Route path='/app/blog' component={Blog} />
          <Route path='/app/gg' component={Gg} />
          <Redirect to='/app/home' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
