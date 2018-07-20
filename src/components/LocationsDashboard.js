import React from 'react';
import { Link } from 'react-router-dom';
import AddLocationModal from './AddLocationModal';

export class LocationsDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    
    this.renderLocations = this.renderLocations.bind(this);
  } 

  renderLocations(item) {
    return (
      <div>
        <Link className="btn btn-primary m-1" role="button" to={`/users/:id/locations/${item.ID}`}>{item.facility_name}</Link>
      </div>
      
    )
  }
  
  
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome {this.props.users[0].user_name}</h1>
        <br/><br/>
        <AddLocationModal />
        <div className="row justify-content-center">
        {this.props.facilities.map(this.renderLocations)}
        </div> 
      </div>
    );
  }
}

export default LocationsDashboard;