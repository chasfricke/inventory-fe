import React, { Component } from 'react';
import '../css/App.css';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Inventory App</h1>
        </header>
        <div>
          <ItemList />
        </div>
      </div>
    );
  }
}

export default App;
