import React from 'react'


class Home extends React.Component {
  render(){
    return(
      <div id='home-page'>
        <div id= 'name-box'>
          <p className= 'brand-name' id= 'home-brand-name'>LaPlaca</p>
          <p id= 'home-tagline'>Family Bakery and Pizzeria</p>
        </div>
        <div id= 'location-box'>
          <p><u>Location</u></p>
          <p id= 'location'>9280 highway 9 <br/>
            Ben Lomond, CA, CA 95005</p>
        </div>
      </div>
    );
  }
}

export default Home;