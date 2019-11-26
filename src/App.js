import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function HatsPage() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
