import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request  from 'superagent';

class Allproducts extends Component {
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
        this.setState({
            collection: response.body
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

    render(){
        return(
            <div className="container-all">
            <h2>All products</h2>
                <div className="category-buttons">
                <button className="all-items">All items</button>
                <button className="onsale">On SAle</button>
                <p className="count"><span className="total-products">{this.state.collection.length}</span> items displayed</p>
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
        )
    }
}
export default Allproducts;