import React from 'react';
import '../css/ItemList.css';

export class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItemsList = this.renderItemsList.bind(this);

    this.state = {
      users: [
          {
              "ID": 123,
              "user_name": "Jay Farnsworth",
              "email": "JCFarnz@gmail.com",
              "password": "fjdksafjksd89345ujkfdskajjkfd834",
              "active": true,
              "logged_in": true,
              "facilities": [47,48,49]
          }  
      ],
      facilities: [
        {
          "ID": 47,
          "facility_name": "Red Rocks Elementary",
          "street_address": "123 Main Street",
          "city": "Morrison",
          "state": "CO",
          "zip_code": 12345},
        {
          "ID": 48,
          "facility_name": "Jackson Middle School",
          "street_address": "123 Main Street",
          "city": "Morrison",
          "state": "CO",
          "zip_code": 12345},
        {
          "ID": 49,
          "facility_name": "Boulder High School",
          "street_address": "123 Main Street",
          "city": "Morrison",
          "state": "CO",
          "zip_code": 12345}
      ],
      inventory: [
        {
          "ID": 1245,
          "facility": "Jackson Middle School",
          "facility_ID": 48,
          "item_name": "paper towels",
          "image_upload": "C:\\fakepath\\joffe_logo.png",
          "image_link": "https://www.reliablepaper.com/v/vspfiles/photos/SCA290088-2.jpg",
          "quantity": 500,
          "units": "rolls",
          "description": "brown rolls, 100yd length",
          "storage_location": "Maintenance closet on 1st Floor",
          "expiration": "2018-08-15",
          "email_reminder": true},
        {
          "ID": 1246,
          "facility": "Jackson Middle School",
          "facility_ID": 48,
          "item_name": "protein bars",
          "image_upload": "C:\\fakepath\\joffe_logo.png",
          "image_link": "https://www.moreprepared.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/h/t/httpsstaging.moreprepared.compubmediacatalogproductsosos_food_bar_2400_calorie.jpg",
          "quantity": 500,
          "units": "bars",
          "description": "nut and dairy free",
          "storage_location": "Maintenance closet on 1st Floor",
          "expiration": "2018-03-15",
          "email_reminder": true},
        {
          "ID": 1247,
          "facility": "Jackson Middle School",
          "facility_ID": 48,
          "item_name": "thermal blankets",
          "image_upload": "C:\\fakepath\\joffe_logo.png",
          "image_link": "https://i.ebayimg.com/images/g/VU0AAOSwWKtUrij0/s-l300.jpg",
          "quantity": 500,
          "units": "blankets",
          "description": "4 x 6ft dimensions",
          "storage_location": "Storage Locker #12 on 3rd Floor",
          "expiration": "2018-03-15",
          "email_reminder": true},
        {
          "ID": 1248,
          "facility": "Jackson Middle School",
          "facility_ID": 48,
          "item_name": "nitrile gloves",
          "image_upload": "C:\\fakepath\\joffe_logo.png",
          "image_link": "https://cdn.shopify.com/s/files/1/1820/0509/products/BNF2083-05.jpg?v=1493260357",
          "quantity": 1000,
          "units": "pairs",
          "description": "size large",
          "storage_location": "Nurse's Office",
          "expiration": "",
          "email_reminder": true},
        {
          "ID": 1249,
          "facility": "Jackson Middle School",
          "facility_ID": 48,
          "item_name": "first aid kit",
          "image_upload": "C:\\fakepath\\joffe_logo.png",
          "image_link": "https://shop.stjohn.org.au/www/1191/files/640001_leisure_small_kit_700x700_2.jpg",
          "quantity": 25,
          "units": "kits",
          "description": "enough to supply a classroom for 2 days",
          "storage_location": "Nurse's Office",
          "expiration": "2019-06-03",
          "email_reminder": true}
      ]  
    };
  }

  renderItemsList(item){
    if (this.state != null) {     
      return (
          <div className="card col-8 col-sm-5 col-md-3 col-lg-3 col-xl-2 m-1 p-0 shadow mb-5 bg-white rounded text-center">
            <div className="card-header">
              <h4 className="card-title mb-0">{item.item_name.toUpperCase()}</h4>
            </div>
            <img className="card-img-top d-none d-sm-block item-image" src={item.image_link} alt="product"></img>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">Expires: {item.expiration}</li>
              <li className="list-group-item">{item.quantity} {item.units}</li>
              <li className="list-group-item d-inline-block text-truncate">{item.description}</li>
            </ul>
            <div className="card-body d-flex align-items-end">
              <a href="#" className="btn btn-primary btn-block ">View</a>
            </div>
          </div>
      )
    } 
  }


  render() {
    return (
      <div className="text-center">
        <h2>{this.state.facilities[2].facility_name}</h2>
        <div className=" container-fluid list-container">
          <br/>
          <h3>Inventory</h3>
          <br/>
          <div className="row justify-content-center">
              {this.state.inventory.map(this.renderItemsList)}          
          </div>   
          <a href="#" className="btn btn-primary btn-sm ">Back To Top</a>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default ItemList;