import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import history from './api/history';

import './App.scss';

import { Blog, Home, Gg } from './pages';

class App extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page-wrapper'>
          <div className='background-fader'></div>
          <BrowserRouter history={history} >
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/gg' component={Gg} />
              <Redirect to='/home' />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
