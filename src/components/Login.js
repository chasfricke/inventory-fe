import React from 'react';
import { Link } from 'react-router-dom';
import NewUserModal from './NewUserModal';

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.updateActiveUser = this.updateActiveUser.bind(this);
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

  updateActiveUser(event){
    this.setState({"activeUser": event.target.name})
    console.log("user selected")
  }
  
  
  render() {
    return (
      <div className="container">
      <br/><br/>
      <NewUserModal/>
        <form className="container col-10 text-center">
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg dropdown-toggle col-12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.activeUser ? this.state.activeUser : "Users"}
            </button>
            <div className="dropdown-menu">
              {(this.state.userList 
                ?  this.state.userList.map(user => {
                  return (<button class="dropdown-item" name={user.user_name} type="button" onClick={this.updateActiveUser}>{user.user_name}</button>)
                })
                :  null
              )}
            </div>
          </div>
          <div className='container mt-4'>
            <Link className="btn btn-primary" role="button" to="/users/:id/locations" onClick={this.handleClick}>Submit</Link>
          </div>
        </form>
        
      </div>
    );
  }
}

export default Login;