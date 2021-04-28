import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
