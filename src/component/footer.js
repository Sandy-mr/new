import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgLogoBlak from  '../images/mf-logo-black.svg'


class footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container-footer top">
          <img className="ImgLogoBlak" src={ImgLogoBlak} />
        </div>
        <div className="row">
          <div className="columna">
            <h3>Company</h3>
            <p><Link to="#">About</Link> </p>
            <p><Link to="#">Term + Conditions</Link> </p>
          </div>

          <div className="columna">
            <h3>Category</h3>
            <p><Link to="#">Seating</Link></p>
            <p><Link to="#">Tables</Link></p>
            <p><Link to="#">Misc</Link></p>

          </div>
          <div className="columna right">
            <h3>Social</h3>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-pinterest"></i></Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default footer;
