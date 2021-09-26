import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './Views/Dashboard/Dashboard';
import NotFound from './Views/NotFound/NotFound';
import Navbar from '././Components/Navbar';
import Subscriptions from './Views/Subscriptions/Subscriptions';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
