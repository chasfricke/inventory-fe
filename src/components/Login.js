import React from 'react';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
   console.log("clicked")
  }
  
  
  
  render() {
    return (
      <div className="container">
      <br/><br/>
        <form className="container col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <Link className="btn btn-primary" role="button" to="/users/:id/locations" onClick={this.handleClick}>Submit</Link>
        </form>
      </div>
    );
  }
}

export default Login;