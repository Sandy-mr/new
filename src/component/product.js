import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request  from 'superagent';

class Product extends Component {
    constructor(){
        super()

        this.state={
            data: []

        };

    }
    getApi = (ENDPOINT) => {
        return request.get(ENDPOINT);
      }
      getProductData = (response) => {
          console.log(response.body)
        this.setState({
            data: response.body
        })
      }
      getProduct = (id) =>{
        const API = 'https://mallory-furniture-admin.now.sh/api/v1/products/'+id; 
        this
          .getApi(API)
          .then(this.getProductData)
      }
    
      componentDidMount() {
          this.getProduct(this.props.match.params.prod);
      }

    
    render() {
        var item = this.state.data;
        return(
          <div className="product-page">
            <div className="product-media">
                <img src={item.imageLink}/>
            </div>
            <div className="product-item">
                <div className="product-item-info">
                    <h1 className="product-name">{item.item}</h1>
                    <p className="item-price">{'$'+item.price+'.00'}</p>
                    <div className="group-details">
                        <table className="product-details">
                            <tbody>
                                <tr>
                                    <td className="td-head">Condition</td>
                                    <td className="td-head">Measurements</td>
                                </tr>
                                <tr>
                                    <td>{item.condition}</td>
                                    <td>{'W:'+item.width+' H:'+ item.height+' L:'+item.length }</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="to-cart">ADD TO CART</button>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
export default Product;