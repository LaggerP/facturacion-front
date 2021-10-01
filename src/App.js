import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './Views/Dashboard/Dashboard';
import Account from './Views/Account/Account';
import NotFound from './Views/NotFound/NotFound';
import Navbar from '././Components/Navbar';
import Subscriptions from './Views/Subscriptions/Subscriptions';
import Packages from './Views/Packages/Packages';
import Invoices from './Views/Invoicing/Invoicing';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Navbar/>
                <Dashboard/>
              </Route>
              <Route exact path="/account">
                <Navbar/>
                <Account/>
              </Route>
              <Route exact path="/subscriptions">
                <Navbar/>
                <Subscriptions/>
              </Route>
              <Route exact path="/packages">
                <Navbar/>
                <Packages/>
              </Route>
              <Route exact path="/invoices">
                <Navbar/>
                <Invoices/>
              </Route>
              <Route exact path="*">
                <Navbar/>
                <NotFound/>
              </Route>
            </Switch>
          </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
