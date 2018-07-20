import React from 'react';
import { Link } from 'react-router-dom';
import addButton from '../assets/add-button.png';
import axios from 'axios';

export class AddItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  } 


componentDidMount(){
    var url = window.location.pathname;
    var activeFacilityId = url.substring(url.lastIndexOf('/') + 1);
    var activeFacility = this.props.facilities.filter(facility => facility.ID == activeFacilityId);
    this.setState({facility_ID: activeFacilityId, facility: activeFacility[0].facility_name})
}
   

  submitHandler(event) {
    event.preventDefault();
}

  handleInputChange(event) {
		event.preventDefault()
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({[name]: value});
    }
    
onSubmit = event => {
    
    window.scroll(0,0)
    const data = this.state;
    (this.state.image ? this.uploadImage() : this.addItemData())
    this.setState({"submit": "Item Added"})
}

addItemData = data => {
    var formData = this.state
    fetch('https://inventory-server-9432.herokuapp.com/inventory', {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })  
        .then(res => res.json())
        .catch(error => console.error('Error:', error.response))
}

handleImageChange = (event) => {
    console.log(event.target.files[0])
    const file = event.target.files[0];
    this.setState({image: event.target.files[0]})
}
  
uploadImage = (event) => {
  console.log('working')
  const formData = new FormData();
  formData.append('enctype', 'multipart/form-data');
  formData.append('file', this.state.image );
    axios.post('https://inventory-server-9432.herokuapp.com/upload', formData)
    .then(resp => {
        this.setState({image_link: resp.data.data}, () => {
            this.addItemData()
        })
    })
  .catch(error=>console.log(error.response))
}
  

  
  render() {
    return (
        <div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <h3>Inventory</h3>
                </div>
                <div className="col">
                    <input className="align-content-end" type="image"  src={addButton} width="auto" height="50" alt="" data-toggle="modal" data-target="#exampleModal"/>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">Add Item</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form className="container" onSubmit={this.submitHandler}>
                    <div className="form-section">
                    <div className="form-group">
                        <label>Item Name</label>
                        <input type="link" className="form-control" name="item_name" value={this.state.item_name} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control" name="image_upload" value={this.state.image_upload} onChange={this.handleImageChange} />
                        <input type="text" className="form-control" placeholder="https://www.img.com" name="image_link" value={this.state.image_link} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Units</label>
                        <input type="text" className="form-control" name="units" value={this.state.units} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="textarea" className="form-control" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="date" className="form-control" name="expiration" value={this.state.expiration} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Email Reminder</label>
                        <input type="checkbox" className="form-control" name="email_reminder" value={this.state.email_reminder} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Storage Location</label>
                        <input type="text" className="form-control" name="storage_location" value={this.state.item_location} onChange={this.handleInputChange} />
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

export default AddItemModal;