import React, { Component } from 'react'
import Header from './header.js'
import { Link } from "react-router-dom"

class Home extends Component{
 render() {
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
                    <p className="category-p"><Link className="button-categorory" to="/category/Misc">Misc</Link></p>
                    <p className="category-p"><Link className="button-categorory" to="/category/Storag">Storag</Link></p>
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
