import React from 'react';

export class AddItemForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);

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

 
  render() {
    return (
    <div>
      <br/><br/>
      <form className="container" onSubmit={this.submitHandler}>
        <div className="form-section">
          <h4>Add Item</h4>
          <div className="form-group">
            <label>Item Name</label>
            <input type="link" className="form-control" name="item_name" value={this.state.item_name} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" className="form-control" name="image_upload" value={this.state.image_upload} onChange={this.handleInputChange} />
            <p>or</p>
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
            <input type="text" className="form-control" name="item_location" value={this.state.item_location} onChange={this.handleInputChange} />
          </div>
        </div>	
        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
      </form>
    </div>
    );
  }
}

export default AddItemForm;