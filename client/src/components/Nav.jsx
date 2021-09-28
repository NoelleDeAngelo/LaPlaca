import React from 'react'

class Nav extends React.Component {
  render(){
    return(
      <nav className="nav">
        <div className= 'brand-name'>La Placa</div>
        <a  onClick = {(event)=> {document.getElementsByClassName("nav-links")[0].classList.toggle('active')}} href= '#' className = 'hamburger-menu'>
          <span className= 'bar'></span>
          <span className= 'bar'></span>
          <span className= 'bar'></span>
          </a>
        <div className= "nav-links">
          <ul>
            <li><a href = '#' >Home</a></li>
            <li><a href = '#' >Our Story</a></li>
            <li><a href = '#' >Pizza</a></li>
            <li><a href = '#' >Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;