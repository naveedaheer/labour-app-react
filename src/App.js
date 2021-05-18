import React from 'react';
import './App.css';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { history } from './helpers';
import { PrivateRoute } from './components';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';

const App = () => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </Router>
  </div>
);

export default App;
