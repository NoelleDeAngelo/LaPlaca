import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


class Nav extends React.Component {

  render(){
    return(
      <nav className="nav">
        <div className= 'brand-name' id='nav-brand-name'>LaBlaca </div>
        <a onClick = {(event)=> {document.getElementsByClassName("nav-links")[0].classList.toggle('active')}} href= '#' className = 'hamburger-menu'>
          <span className= 'bar'></span>
          <span className= 'bar'></span>
          <span className= 'bar'></span>
          </a>
        <div className= "nav-links">
          <ul>
            <li><Link to ='/' >Home</Link></li>
            <li><Link to = '/OurStory' >Our Story</Link></li>
            <li><Link to = '/Pizza' >Pizza</Link></li>
            <li><Link to = '/ContactUs' >Contact Us</Link></li>
            {this.props.cartTotal == 0 ? <li><div onClick= {()=>{swal('Your cart is empty', `but your stomach doesn't have to be.`)}}><i className="fas fa-shopping-cart"></i>  ${this.props.cartTotal.toFixed(2)}</div></li> :
            <li><Link to = '/Checkout' ><i className="fas fa-shopping-cart"></i>  ${this.props.cartTotal.toFixed(2)}</Link></li>}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;