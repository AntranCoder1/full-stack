import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Layouts/Landing';
import AuthContextProvider from './context/Auth.context';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';

function App(props) {
  return (
   <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" render={props => <Auth {...props} authRoute='login' />} />
          <Route exact path="/resgister" render={props => <Auth {...props} authRoute='resgister' />} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
   </AuthContextProvider>
  );
}

export default App;
