import React, { Component } from 'react';
import '../css/App.css';
import ItemList from './ItemList';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <div>
          <ItemList />
        </div>
      </div>
    );
  }
}

export default App;
