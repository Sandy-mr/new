import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgLogoBlak from  '../images/mf-logo-black.svg'


class footer extends Component {
  render() {
    return(
      <footer className="">
           <img className="ImgLogoBlak" src={ImgLogoBlak} />

         <div className="row">
           <div className="columna1">
             <h3>Company</h3>
             <p><Link to="#">About</Link> </p>
             <p><Link to="#">Term + Conditions</Link> </p>
           </div>

           <div className="columna1">
             <h3>Category</h3>
             <p><Link to="#">Seating</Link></p>
             <p><Link to="#">Tables</Link></p>
             <p><Link to="#">Misc</Link></p>

           </div>
           <div className="columna2">
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
