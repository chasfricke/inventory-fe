import React from 'react';
import '../css/ItemList.css';

export class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItemsList = this.renderItemsList.bind(this);

    this.state = { testData: {
      "name": "Jay Farnsworth",
      "school": "Boulder High School",
      "email": "JCFarnz@gmail.com",
      "items": [{
        "name": "water",
        "description": "blue 5-gallon jugs of water.",
        "expiration": "04/20",
        "quantity": "10 units",
        "image": "http://www.survivalsolutions.com/store/media/Water/3_5galwaterjug_full.gif"
      },
      {
        "name": "food",
        "description": "protein bars",
        "expiration": "05/20",
        "quantity": "100 bars, 5oz each",
        "image": "https://www.moreprepared.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/h/t/httpsstaging.moreprepared.compubmediacatalogproductsosos_food_bar_2400_calorie.jpg"
      },
      {
        "name": " thermal blankets",
        "description": "First aid kit blankets help block and repel rain, snow, and moisture to keep you dry in damp, wet, cold, rainy environments. Helps maintain approximately 90% of body heat during intense cold climates. The lightweight design makes it a necessity safety first aid kit item to have.",
        "expiration": "NA",
        "quantity": "100 blankets",
        "image": "https://i.ebayimg.com/images/g/VU0AAOSwWKtUrij0/s-l300.jpg"
      },
      {
        "name": " nitrile gloves",
        "description": "8 mil. thickness, size L",
        "expiration": "NA",
        "quantity": "250 pairs",
        "image": "https://cdn.shopify.com/s/files/1/1820/0509/products/BNF2083-05.jpg?v=1493260357"
      },
      {
        "name": "first aid kit",
        "description": "The Small Leisure Kit includes a comprehensive range of first aid items for common injuries in a medium-sized classroom.",
        "expiration": "8/01/2019",
        "quantity": "25",
        "image": "https://shop.stjohn.org.au/www/1191/files/640001_leisure_small_kit_700x700_2.jpg"
      }
    ]} 
    };

  }

  renderItemsList(item){
    if (this.state.testData != null) {     
      return (
          <div className="card col-8 col-sm-5 col-md-3 col-lg-3 col-xl-2 m-1 p-0 shadow mb-5 bg-white rounded">
            <div className="card-header">
              <h4 className="card-title mb-0">{item.name.toUpperCase()}</h4>
            </div>
            <img className="card-img-top d-none d-sm-block item-image" src={item.image} alt="product"></img>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">Expires: {item.expiration}</li>
              <li className="list-group-item">{item.quantity}</li>
              <li className="list-group-item d-inline-block text-truncate" >{item.description}</li>
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
      <div>
        <h2>{this.state.testData.school}</h2>
        <div className=" container-fluid list-container">
          <br/>
          <h3>Inventory</h3>
          <br/>
          <div className="row justify-content-center">
              {this.state.testData.items.map(this.renderItemsList)}          
          </div>   
          <a href="#" className="btn btn-primary btn-sm ">Back To Top</a>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default ItemList;