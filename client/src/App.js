import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Layouts/Landing';
import Auth from './views/Auth';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" render={props => <Auth {...props} authRoute='login' />} />
        <Route exact path="/resgister" render={props => <Auth {...props} authRoute='resgister' />} />
      </Switch>
    </Router>
  );
}

export default App;
