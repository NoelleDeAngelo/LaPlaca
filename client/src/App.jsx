import React from "react";
import{Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import Pizza from './pages/Pizza.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Nav from './components/Nav.jsx'


class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="App">
        <Nav/>
         <Route path= '/' exact component = {Home} />
         <Route path= '/OurStory' component = {OurStory} />
        <Route path= '/Pizza' component = {Pizza} />
        <Route path= '/ContactUs' component = {ContactUs} />
        </div>

      </Router>

    );
  }
}

export default App;