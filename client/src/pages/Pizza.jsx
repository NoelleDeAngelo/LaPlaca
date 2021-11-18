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


//   render(){
//     return(
//       <div className = 'pizza-page'>
//         <h1><u>Pizza</u></h1>
//         <button id ='order-button' onClick= {()=> this.setState({modalIsOpen:true})}>Start Your Order</button>
//         <Modal isOpen ={this.state.modalIsOpen}
//          onRequestClose= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'})}
//           style={{
//           'overlay': {'background':'grey'},
//           'content': {'color':'black', 'width': '450px', 'margin':'auto'} }}>
//              <span style={{'float': 'right', 'fontSize': '150%'}} onClick= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'}) }>&#10006;</span>
//              <form name= 'pizza-order' id= 'pizza-order-form'>
//               <h2><u>Order Your Pizza</u></h2>
//               <label for = 'customer-first-name'>First Name: </label>
//                <input type= 'text' name= 'customer-first-name' required></input> <br></br>
//                <label for = 'customer-last-name'>Last Name: </label>
//                <input type= 'text' name= 'customer-last-name' required></input>
//                <p> Pizza Type: </p>
//                <div>
//                 <input onClick = {()=> {this.changePizzaSelected('fourCheese')}} type= 'radio' id= 'four-cheese' name = 'pizza-type' value = 'four-cheese'></input>
//                 <label for = 'four-cheese'> Four Cheese </label>
//                </div>
//               <div>
//                 <input onClick = {()=> {this.changePizzaSelected('veg')}}type= 'radio' id= 'veg' name = 'pizza-type' value = 'veg'></input>
//                 <label for = 'veg'> Veggie </label>
//               </div>
//               <div>
//                 <input onClick = {()=> {this.changePizzaSelected('byo')}} type= 'radio' id= 'byo' name = 'pizza-type' value = 'byo'></input>
//                 <label for = 'byo'> Build Your Own </label>
//               </div>
//               <PizzaDes type= {this.state.pizzaSelected}/>


//              </form>
//           </Modal>
//       </div>
//     );
//   }
// }

render(){
  return(
    <div className = 'pizza-page '>
      <h1><u>Pizzas</u></h1>
      <div className= 'pizzas-list flex-row'>
        <PizzaDes type= 'byo'/>
        <PizzaDes type= 'cheese'/>
        <PizzaDes type= 'veg'/>
        <PizzaDes type= 'cheese'/>
        <PizzaDes type= 'veg'/>
        <PizzaDes type= 'byo'/>
      </div>

    </div>
  );
}
}

export default Pizza;


// document.querySelector('input[name="pizza-type"]:checked')? document.querySelector('input[name="pizza-type"]:checked').value : 'none'
