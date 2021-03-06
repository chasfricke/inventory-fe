import React from 'react';
import logo from '../assets/joffe_logo.png';

export class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
  }

 render() {
    return (
    <div className="container flex-column d-flex align-items-center">
        <br/><br/>
        <h2>Emergeny Supply Inventory</h2>
        <br/><br/>
        <img src={logo} width="50%"></img>
        <br/><br/>
        <a href="/login" className="btn btn-primary">Get Started</a>
    </div>
    );
  }
}

export default SplashScreen;