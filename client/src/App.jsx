import React from "react";
import{Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import Pizza from './pages/Pizza.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Nav from './components/Nav.jsx'
import Checkout from './pages/Checkout.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateCartTotal= this.updateCartTotal.bind(this);
    this.updatePizzasOrdered = this.updatePizzasOrdered.bind(this)
    this.state= {
      cartTotal:0,
      pizzasOrdered:[]
    }

  }
  updatePizzasOrdered(remove, pizza){
    var pizzasOrdered = this.state.pizzasOrdered;
    if(remove){
      pizzasOrdered = pizzasOrdered.filter((pie)=>pie !== pizza)
    }else{
      pizzasOrdered.push(pizza)
    }

    this.setState({pizzasOrdered: pizzasOrdered})
  }

  updateCartTotal(remove, amount){
    if (remove){ amount*= -1};
    this.setState((state)=>{return {cartTotal: state.cartTotal+amount}})
  }

  render(){
    return(
      <Router>
        <div className="App">
        <Nav cartTotal= {this.state.cartTotal}/>
         <Route path= '/' exact component = {Home} />
         <Route path= '/OurStory' component = {OurStory} />
        <Route path= '/Pizza' render= {(props)=><Pizza {...props} updateCartTotal= {this.updateCartTotal} updatePizzasOrdered = {this.updatePizzasOrdered}/>} />
        <Route path= '/ContactUs' component = {ContactUs} />
        <Route path= '/Checkout' render= {(props)=><Checkout {...props} updatePizzasOrdered = {this.updatePizzasOrdered} updateCartTotal= {this.updateCartTotal} total= {this.state.cartTotal} pizzasOrdered= {this.state.pizzasOrdered}/>} />
        </div>
      </Router>

    );
  }
}

export default App;