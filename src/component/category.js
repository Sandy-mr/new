import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request  from 'superagent';

class Category extends Component{
    constructor(){
        super()
        this.state={
          collection: [],
          filter: 'all'
        };
    
      }
    
    //   getApi = (ENDPOINT) => {
    //     return request.get(ENDPOINT);
    //   }
    //   fetchProducts = (response) => {
    //     this.setState({
    //       collection: response.body
    //     })
    //   }
      getProducts = (category) =>{
        var cate = category.toLowerCase();
        const API = 'https://mallory-furniture-admin.now.sh/api/v1/products'; 
        request
            .get(API)
            .then(response =>{
                var newArray = [];
                console.log(response.body)
                console.log(cate)
                response.body.forEach(function(element) {
                if(cate == element.category)
                    newArray.push(element)
                });
                console.log(newArray); 
                this.setState({
                    collection: newArray
                  })   
            })
      }
    


      componentWillMount(){
        this.getProducts(this.props.match.params.cat);
       }
       componentWillReceiveProps(){
        this.getProducts(this.props.match.params.cat);
       }
      
    //   getCategoryProducts(){
    //     var parentCategory = this.props.match.params.cat.toLowerCase();
    //     var newArray = [];
    //         this.state.collection.forEach(function(element) {
    //         if(parentCategory == element.category)
    //         newArray.push(element)
    //       });
    //       console.log(newArray);
    //   }
    // var col = this.getCategoryProducts()
    render() {
          return(
            <div className="category-page">
            <h2>{this.props.match.params.cat}</h2>
                <div className="category-buttons">
                <button class="all-items">All items</button>
                <button class="onsale">On SAle</button>
                <p class="count"><span class="total-products">{this.state.collection.length}</span> items displayed</p>
                </div>
                <div className="containert content products">
                    { this.state.collection.map(product => {
                        return (
                        <div className="product-item">
                            <img className="item-photo" src={product.imageLink}/>
                            <span className='item-name'>{product.item}</span>
                            <p className="item-price">{'$'+product.price+'.00'}</p>
                        </div>
                        );
                        })
                    }
                </div>
            </div>
          )
        }
}
export default Category;