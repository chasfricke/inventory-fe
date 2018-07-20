import React from 'react';
import { Link } from 'react-router-dom';
import addButton from '../assets/add-button.png';

export class AddLocationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }  

    handleInputChange(event) {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value        
        this.setState({[name]: value});
    }
    
    onSubmit = event => {
        var formData = this.state
        //need to update with new route
        fetch('https://inventorydb.herokuapp.com/locations', {
            method: 'POST',
            body:JSON.stringify(formData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })  
            .then(res => res.json())
            .catch(error => console.error('Error:', error.response))
    }
  
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-6">
                        <h3>Your Locations</h3>
                    </div>
                    <div className="col">
                        <input className="align-content-end" type="image"  src={addButton} width="auto" height="50" alt="" data-toggle="modal" data-target="#exampleModal"/>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">Add New Facility</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form className="container" onSubmit={this.submitHandler}>
                        <div className="form-section">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="link" className="form-control" name="facility_name" value={this.state.facility_name} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Street Address</label>
                                <input type="text" className="form-control" name="street_address" value={this.state.street_address} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control" name="state" value={this.state.state} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Zip Code</label>
                                <input type="number" className="form-control" name="zip_code" value={this.state.zip_code} onChange={this.handleInputChange} />
                            </div>
                        </div>	
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default AddLocationModal;