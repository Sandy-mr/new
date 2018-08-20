import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ImgLogoBlak from  '../images/mf-logo-black.svg'

class Cbody extends Component {
  _getContentBody(){
    const content = this.props.content.map(function(value, index){
    return <span key={index}>{value}</span>
    })
    return content
  }

  render() {
    return(
      <section>
      <div className="headers-list__red">
        <Link to="/All-Products">{this._getContentBody()[3]} Products</Link>
      </div>
        <div className = "Cbody">
          <h1 className="titulo">Browse by Categories</h1>
          <h3 className="titulo1">Explore by furniture type</h3>
        </div>
      <div className="button">
        <li className="colorBlue"><Link to="/category/Seating">{this._getContentBody()[4]}</Link> </li>
          <li className="colorBlue"><Link to="/category/Tables">{this._getContentBody()[5]}</Link> </li>
          <li className="colorBlue"><Link to="/category/Desks">{this._getContentBody()[6]}</Link> </li>
          <li className="colorBlue"><Link to="/category/Storag">{this._getContentBody()[7]}</Link> </li>
          <li className="colorBlue"><Link to="/category/Bedroom">{this._getContentBody()[8]}</Link> </li>
          <li className="colorBlue"><Link to="/category/Misc">{this._getContentBody()[9]}</Link> </li>
          <li ><Link to="null">|</Link></li>
          </div>
      </section>
      // <div className="button-img">
      //   <img src={ImgLogoBlak} alt=""/>
      //   </div>
      )
    }
}
export default Cbody;
