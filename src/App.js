import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './Views/Dashboard/Dashboard';
import NotFound from './Views/NotFound/NotFound';
import Navbar from '././Components/Navbar';
import Invoicing from './Views/Invoicing/Invoicing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/invoicing" component={Invoicing} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
