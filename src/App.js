import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Redirect, Router, Route } from 'react-router-dom';
import history from './api/history';

import { Blog, Home, Gg } from './pages';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Router history={history} >
          <Switch>
            <Route path='/app/home' component={Home} />
            <Route path='/app/blog' component={Blog} />
            <Route path='/app/gg' component={Gg} />
            <Redirect to='/app/home' />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
