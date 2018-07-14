import React, { Component } from 'react';
import '../css/App.css';
import ItemList from './ItemList';
import NavBar from './NavBar';
import AddItemForm from './AddItemForm';
import SplashScreen from './SplashScreen';
import Login from './Login';
import LocationsDashboard from './LocationsDashboard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       
        <div className="site-content">
          <div className="site-background">
            <div className="site-body">
              <div className="app-header">
                <NavBar />
              </div>
              <div className="main">
                <Switch>
                  <Route path="/users/:id/locations/:id" component={() => (<div><ItemList /></div>)} />
                  <Route path="/users/:id/locations" component={() => (<div><LocationsDashboard /></div>)} />
                  <Route path="/inventory/add" component={() => (<div><AddItemForm /></div>)} />
                  <Route path="/inventory" component={() => (<div><ItemList /></div>)} />
                  <Route path="/login" component={() => (<div><Login /></div>)} />
                  <Route path="/" component={() => (<div><SplashScreen /></div>)} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
