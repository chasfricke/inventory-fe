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
            <input type="link" className="form-control" name="item_name" value={this.state.first_name} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" className="form-control" name="image" value={this.state.image} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Items Per Package</label>
            <input type="number" className="form-control" name="items_per_package" value={this.state.item_quantity} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label># Of Packages</label>
            <input type="number" className="form-control" name="number_of_packages" value={this.state.item_quantity} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea type="textarea" className="form-control" name="description" value={this.state.description} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input type="date" className="form-control" name="expiration" value={this.state.expiration} onChange={this.handleInputChange} />
          </div>
        </div>	
        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
      </form>
    </div>
    );
  }
}

export default AddItemForm;