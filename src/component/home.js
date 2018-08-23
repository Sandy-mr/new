import React, { Component } from 'react'
import Header from './header.js';
import { Link } from "react-router-dom";
import request  from 'superagent';


class Home extends Component{
	constructor(){
    super()
    this.state={
      collection: [],
      filter: 'all'
    };

  }

  getApi = (ENDPOINT) => {
    return request.get(ENDPOINT);
  }
  fetchProducts = (response) => {
    var newArray = []
    response.body.forEach(function(element) {
        if(element.featured == true)
        newArray.push(element)
      });
    this.setState({
      collection: newArray
    })
  }
  getProducts(){
    const API = 'https://mallory-furniture-admin.now.sh/api/v1/products'; 
    this
      .getApi(API)
      .then(this.fetchProducts)
  }

  componentDidMount() {
  	this.getProducts();
  }
  
 render() {
  console.log(this.state.collection)
   console.log(this.props.match)
    return(
      <div>
        <Header />
        <main className="page-wrapper">
          <div className="container featured">
            <div className="container-title">
              <h2>Featured Poducts</h2>
              <h3>Check out some of our favorite listings</h3>
            </div>
            <div className="containert content products">
              { this.state.collection.map(product => {
                var itemUrl = '/product/'+product._id;
                return (
                  <div className="product-item">
                  <Link to={itemUrl}>
                    <img className="item-photo" src={product.imageLink}/>
                    <span className='item-name'>{product.item}</span>
                    <p className="item-price">{'$'+product.price+'.00'}</p>
                  </Link>
                  </div>
                  );
                })
              }
            </div>
          </div>

          <div className="container shop-categories">
            <div className="container-title">
              <h2>Browse by Categories</h2>
              <h3>Explore by forniture type</h3>
            </div>
            <div className="containert content">
                <div className="cateogories-buttons">
                <p className="category-p"><Link className="button-categorory" to="/category/Seating">Seating</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Desks">Desks</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Tables">Tables</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Miscellaneous">Misc</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Storage">Storag</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Bedroom">Bedroom</Link></p>
                </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
export default Home;
