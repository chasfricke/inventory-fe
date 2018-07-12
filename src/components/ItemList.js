import React from 'react';
import '../css/ItemList.css';

export class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { testData: {
      "name": "Jay Farnsworth",
      "school": "Boulder High School",
      "email": "JCFarnz@gmail.com",
      "items": [{
        "name": "water",
        "description": "blue 5-gallon jugs of water.",
        "expiration": "04/20",
        "quantity": "10 units"
      },
      {
        "name": "food",
        "description": "protein bars",
        "expiration": "05/20",
        "quantity": "100 bars, 5oz each"
      },
      {
        "name": " thermal blankets",
        "description": "First aid kit blankets help block and repel rain, snow, and moisture to keep you dry in damp, wet, cold, rainy environments. Helps maintain approximately 90% of body heat during intense cold climates. The lightweight design makes it a necessity safety first aid kit item to have.",
        "expiration": "NA",
        "quantity": "100 blankets"
      }]} 
    };

  }

 
  render() {
    return (
      <div>
        <h1>{this.state.testData.name}</h1>
        <h4>{this.state.testData.school}</h4>
        <h4>{this.state.testData.email}</h4>
        <hr/>
        <div className="list-container">
          <div className="row justify-content-center ">
            <div className="card col-sm-5 col-md-3 col-lg-2 m-1 p-0">
              <img className="card-img-top" src="http://www.survivalsolutions.com/store/media/Water/3_5galwaterjug_full.gif" alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{this.state.testData.items[0].name}</h2>
                <p className="card-text">{this.state.testData.items[0].description}</p>
                <p className="card-text">{this.state.testData.items[0].expiration}</p>
                <p className="card-text">{this.state.testData.items[0].quantity}</p>
                <a href="#" className="btn btn-primary">Details</a>
              </div>
            </div>

            <div className="card col-sm-5 col-md-3 col-lg-2 m-1 p-0">
              <img className="card-img-top" src="https://www.moreprepared.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/h/t/httpsstaging.moreprepared.compubmediacatalogproductsosos_food_bar_2400_calorie.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{this.state.testData.items[1].name}</h2>
                <p className="card-text">{this.state.testData.items[1].description}</p>
                <p className="card-text">{this.state.testData.items[1].expiration}</p>
                <p className="card-text">{this.state.testData.items[1].quantity}</p>
                <a href="#" className="btn btn-primary">Details</a>
              </div>
            </div>

            <div className="card col-sm-5 col-md-3 col-lg-2 m-1 p-0">
              <img className="card-img-top" src="http://www.survivalsolutions.com/store/media/Water/3_5galwaterjug_full.gif" alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{this.state.testData.items[0].name}</h2>
                <p className="card-text">{this.state.testData.items[0].description}</p>
                <p className="card-text">{this.state.testData.items[0].expiration}</p>
                <p className="card-text">{this.state.testData.items[0].quantity}</p>
                <a href="#" className="btn btn-primary">Details</a>
              </div>
            </div>

            <div className="card col-sm-5 col-md-3 col-lg-2 m-1 p-0">
              <img className="card-img-top" src="https://i.ebayimg.com/images/g/VU0AAOSwWKtUrij0/s-l300.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{this.state.testData.items[2].name}</h2>
                <p className="card-text">{this.state.testData.items[2].description}</p>
                <p className="card-text">{this.state.testData.items[2].expiration}</p>
                <p className="card-text">{this.state.testData.items[2].quantity}</p>
                <a href="#" className="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default ItemList;