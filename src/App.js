import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import ErrorPage from './ErrorPage';
import ForgetPass from './ForgetPass';

function App () {
  return (
    <Router>
       <Header />
        <Switch>
           <Route exact path="/"component={Landing} />
           <Route path="/welcome"component={Welcome} />
           <Route path="/login"component={Login} />
           <Route path="/signup"component={Signup} />
           <Route path="/forgetpass"component={ForgetPass} />
           <Route component={ErrorPage} />
        </Switch>

       <Footer />
       
    </Router>
  )
}

export default App;
