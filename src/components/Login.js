import React from 'react';
import { Link } from 'react-router-dom';
import NewUserModal from './NewUserModal';

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
   console.log("clicked")
  }
  componentDidMount(){
    fetch('https://inventory-server-9432.herokuapp.com/user')
      .then(resp=>resp.json())
      .then(userList => {
        this.setState({userList: userList})
      })
  }
  
  
  render() {
    return (
      <div className="container">
      <br/><br/>
        <form className="container col-10">
          <div className="btn-group col-lg-auto">
            <button className="btn btn-secondary btn-lg dropdown-toggle col" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select User
            </button>
            <div className="dropdown-menu col">
              {(this.state.userList 
                ?  this.state.userList.map(user => {
                  return (<h3>{user.user_name}</h3>)
                })
                :  null
              )}
            </div>
          </div>
          <div className='container'>
            <Link className="btn btn-primary" role="button" to="/users/:id/locations" onClick={this.handleClick}>Submit</Link>
          </div>
        </form>
        <NewUserModal/>
      </div>
    );
  }
}

export default Login;