import React, { Fragment } from 'react';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import HobbiesPage from './views/HobbiesPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'

const App = () => (
  <Fragment>
      <Route exact path='/' component={SignUp} />
      <Route path='/login' component={SignIn} />
      <Route path='/hobby' component={HobbiesPage} />
  </Fragment>
);

const AppWithRouter = withRouter(App)

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWithRouter />
      </Router>
    </Provider>
  )
};

export default Routes;
