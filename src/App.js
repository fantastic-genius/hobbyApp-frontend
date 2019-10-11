import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import HobbiesPage from './views/HobbiesPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={SignUp} />
      <Route path='/login' component={SignIn} />
      <Route path='/hobby' component={HobbiesPage} />
    </Router>
  </Provider>
)

export default App;
