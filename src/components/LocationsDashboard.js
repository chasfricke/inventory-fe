import React from 'react';
import { Link } from 'react-router-dom';

export class LocationsDashboard extends React.Component {
  constructor(props) {
    super(props)
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
        <h1>Welcome {this.state.users[0].user_name}</h1>
        <br/><br/>
        <h4>Your Locations</h4>
        <div className="row justify-content-center">
              {this.state.facilities.map(this.renderLocations)}          
        </div> 
      </div>
    );
  }
}

export default LocationsDashboard;