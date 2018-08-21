import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

class Headers  extends Component {
  render() {
    var bodyContent


      bodyContent = <div className="header">
        <h1 className="text">Mallory Furniture</h1>
        <span className="textsub">Your furniture is old<br /> Ours is older.</span>
      </div>

    return(
      <header className="background-img ">
        {bodyContent}
      </header>
    )
  }
}
export default Headers;
