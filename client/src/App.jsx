import React from "react";
import{Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import Pizza from './pages/Pizza.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Nav from './components/Nav.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateCartTotal= this.updateCartTotal.bind(this);
    this.state= {
      cartTotal:0,
    }

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
        <Route path= '/Pizza' render= {(props)=><Pizza {...props} updateCartTotal= {this.updateCartTotal}/>} />
        <Route path= '/ContactUs' component = {ContactUs} />
        </div>
      </Router>

    );
  }
}

export default App;