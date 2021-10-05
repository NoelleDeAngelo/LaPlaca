import React from 'react';
import Modal from 'react-modal';
import PizzaDes from '../components/PizzaDes.jsx'


class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.state={
      modalIsOpen: false,
      pizzaSelected: 'none'
    }
  }

  changePizzaSelected(type){
    this.setState({pizzaSelected: type});
  }


  render(){
    return(
      <div>
        <h1>Pizza</h1>
        <button onClick= {()=> this.setState({modalIsOpen:true})}>Order Pizza</button>
        <Modal isOpen ={this.state.modalIsOpen}
         onRequestClose= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'})}
          style={{
          'overlay': {'background':'grey'},
          'content': {'color':'black', 'width': '450px', 'margin':'auto'} }}>
             <span style={{'float': 'right', 'fontSize': '150%'}} onClick= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'}) }>&#10006;</span>
             <form name= 'pizza-order' id= 'pizza-order-form'>
              <h2>Order Your Pizza</h2>
              <label for = 'customer-first-name'>First Name: </label>
               <input type= 'text' name= 'customer-first-name' required></input> <br></br>
               <label for = 'customer-last-name'>Last Name: </label>
               <input type= 'text' name= 'customer-last-name' required></input>
               <p> Pizza Type: </p>
               <div>
                <input onClick = {()=> {this.changePizzaSelected('fourCheese')}} type= 'radio' id= 'four-cheese' name = 'pizza-type' value = 'four-cheese'></input>
                <label for = 'four-cheese'> Four Cheese </label>
               </div>
              <div>
                <input onClick = {()=> {this.changePizzaSelected('veg')}}type= 'radio' id= 'veg' name = 'pizza-type' value = 'veg'></input>
                <label for = 'veg'> Veggie </label>
              </div>
              <div>
                <input onClick = {()=> {this.changePizzaSelected('byo')}} type= 'radio' id= 'byo' name = 'pizza-type' value = 'byo'></input>
                <label for = 'byo'> Build Your Own </label>
              </div>
              <PizzaDes type= {this.state.pizzaSelected}/>


             </form>
          </Modal>
      </div>
    );
  }
}

export default Pizza;


// document.querySelector('input[name="pizza-type"]:checked')? document.querySelector('input[name="pizza-type"]:checked').value : 'none'
