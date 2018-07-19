import React from 'react';
import { Link } from 'react-router-dom';
import addButton from '../assets/add-button.png';
import axios from 'axios';

export class NewUserModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

  }


  componentDidMount() {
    fetch('https://inventory-server-9432.herokuapp.com/facilities')
      .then(resp=>resp.json())
      .then(facilities=>{
        this.setState({
          facilities: facilities
        })
      })
  }


  // handleInputChange(event) {
  //   event.preventDefault()
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({ [name]: value });
  // }

  // onSubmit = event => {

  //   window.scroll(0, 0)
  //   const data = this.state;
  //   (this.state.image ? this.uploadImage() : this.addItemData())
  //   this.setState({ "submit": "Item Added" })
  // }




  render() {
    return (
      <div>
        <div classNam="row">
          <div className="col">
          </div>
          <div className="col">
            <input className="align-content-end" type="image" src={addButton} width="auto" height="50" alt="" data-toggle="modal" data-target="#exampleModal" />
          </div>
        </div>
        <div className='row'>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">New User</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="container" onSubmit={this.submitHandler}>
                  <div className="form-section">
                    <div className="form-group">
                      <label>User Name</label>
                      <input type="link" className="form-control" name="user_name" value={this.state.item_name} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" placeholder="user@gmail.com" name="email" value={this.state.image_link} onChange={this.handleInputChange} />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Facility</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        {(this.state.facilities
                          ? this.state.facilities.map(facility => {
                            return <option>{facility.facility_name}</option>
                          })
                          : null
                        )}
                      </select>
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

export default NewUserModal;