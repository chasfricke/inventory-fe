import React from 'react';
import '../css/ItemList.css';
import AddItemModal from './AddItemModal';

export class InventoryList extends React.Component {
  constructor(props) {
    super(props)

    this.renderFacilityInventory = this.renderFacilityInventory.bind(this);

    this.state = {};
  }

 

  activeFacility = () => {
    var url = window.location.pathname;
    var activeFacilityId = url.substring(url.lastIndexOf('/') + 1);
    var activeFacility = this.props.facilities.filter(facility => facility.ID == activeFacilityId);
    var name = activeFacility[0].facility_name
    return (<h2>{name}</h2>)
  }

renderFacilityInventory = () => {
    var url = window.location.pathname;
    var activeFacilityId = url.substring(url.lastIndexOf('/') + 1);  
    var inventory = this.props.inventory;  
    var activeInventory = inventory.filter(item => item.facility_ID == activeFacilityId);
    var itemCards = activeInventory.map(item => 
      <div className="card col-8 col-sm-5 col-md-3 col-lg-3 col-xl-2 m-1 p-0 shadow mb-5 bg-white rounded text-center">
        <div className="card-header">
          <h4 className="card-title mb-0">{item.item_name.toUpperCase()}</h4>
        </div>
        <img className="card-img-top d-none d-sm-block item-image" src={item.image_link} alt="product"></img>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">Expires: {item.expiration}</li>
          <li className="list-group-item">{item.quantity} {item.units}</li>
          <li className="list-group-item d-inline-block text-truncate">{item.storage_location}</li>
        </ul>
        <div className="card-body d-flex align-items-end">
          <a href="#" className="btn btn-primary btn-block ">View</a>
        </div>
      </div>
    )

    if (itemCards.length >0){
      return (
        <div className="row justify-content-center">
          {itemCards}
        </div>)
    }else {
      return (
        <div className="row justify-content-center">
          <p>(NO INVENTORY LISTED FOR THIS LOCATION)</p>
        </div>)
    }
    
  }



  render() {
    return (
      <div className="text-center">
        {this.activeFacility()}
        <div className="container-fluid list-container">
          <br/>
          <AddItemModal facilities={this.props.facilities} />
          <div>
            {this.renderFacilityInventory()}            
          </div>   
          <a href="#" className="btn btn-primary btn-sm ">Back To Top</a>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default InventoryList;