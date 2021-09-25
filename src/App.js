import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './Views/Dashboard/Dashboard';
import Account from './Views/Account/Account';
import NotFound from './Views/NotFound/NotFound';
import Navbar from '././Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/" component={Account} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
