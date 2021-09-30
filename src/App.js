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
        <Navbar/>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/account" component={Account} />
              <Route path="/subscriptions" component={Subscriptions} />
              <Route path="/packages" component={Packages} />
              <Route path="/invoices" component={Invoices} />
              <Route path="*" component={NotFound}/>
            </Switch>
          </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
