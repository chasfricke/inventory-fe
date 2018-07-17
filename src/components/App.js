import React, { Component } from 'react';
import '../css/App.css';
import InventoryList from './InventoryList';
import NavBar from './NavBar';
import SplashScreen from './SplashScreen';
import Login from './Login';
import LocationsDashboard from './LocationsDashboard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};

  }  
    componentDidMount() {
      this.getUsers()
      this.getFacilities()
      this.getInventory()
    }

    getUsers = () => {
      return fetch('https://inventorydb.herokuapp.com/allusers')
      .then(response => response.json())
      .then(data => {
        var users = data;
        this.setState({users: users})
      })
    }

    getFacilities = () => {
      return fetch('https://inventorydb.herokuapp.com/allfacilities')
      .then(response => response.json())
      .then(data => {
        var facilities = data;
        this.setState({facilities: facilities})
      })
    }

    getInventory = () => {
      return fetch('https://inventorydb.herokuapp.com/inventory')
      .then(response => response.json())
      .then(data => {
        var inventory = data;
        this.setState({inventory: inventory})
      })
    }

    



  
  
  
  
  
  
  
  
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
                  <Route path="/users/:id/locations/:id" component={() => (<div><InventoryList facilities={this.state.facilities} users={this.state.users} inventory={this.state.inventory} /></div>)} />
                  <Route path="/users/:id/locations" component={() => (<div><LocationsDashboard facilities={this.state.facilities} users={this.state.users} inventory={this.state.inventory} /></div>)} />
                  <Route path="/inventory" component={() => (<div><InventoryList /></div>)} />
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
