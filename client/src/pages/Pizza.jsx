import React from 'react';
import Modal from 'react-modal';
import PizzaDes from '../components/PizzaDes.jsx'
import PizzaTopping from '../components/PizzaTopping.jsx'


class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.selectPizza = this.selectPizza.bind(this)
    this.state={
      modalIsOpen: false,
      pizzaSelected: 'none',
      pizzaSize: null,
      pizzaPrice:'none',
    }
  }

  selectPizza(pizza){
    this.setState({modalIsOpen: true, pizzaSelected: pizza});
  }

  selectSize(size){
    this.setState({pizzaSize: size, pizzaPrice: this.state.pizzaSelected.price[size]})
    var sizeElms= document.getElementsByClassName('pizza-size');
    for(var i =0; i< sizeElms.length; i++){
      sizeElms[i].style.border= '2px solid rgb(224, 222, 217)'
    }
    document.getElementById('pizza-size-'+ size).style.border= '1px solid #cc2b2b'
  }



render(){
  return(
    <div className = 'pizza-page '>
      <h1 className = 'pageTitle'>Pizzas</h1>
      <div className= 'pizzas-list flex-row'>
        <PizzaDes selectPizza = {this.selectPizza} type= 'byo'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'cheese'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'veg'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'cheese'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'veg'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'byo'/>
      </div>
      {this.state.pizzaSelected !== 'none' &&
      <Modal
        isOpen ={this.state.modalIsOpen}
        onRequestClose= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'})}
        style={{
          'overlay': {'background': 'rgb(74 74 74 / 45%)'},
          'content': {'boxShadow': '0 4px 10px rgb(74 74 74 / 30%)', 'color':'black', 'width': '60%', 'maxWidth': '750px', 'margin':'auto', 'display': 'flex', 'flexDirection': 'column'} }}>
        <span style={{'float': 'right', 'fontSize': '150%', 'alignSelf': 'end', 'cursor': 'pointer'}} onClick= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'}) }>&#10006;</span>
        <div style= {{'display': 'flex'}}>
          <img style= {{'height': '200px', 'width': '200px', 'objectFit': 'cover'}} src = {this.state.pizzaSelected.picture}></img>
          <div style= {{'marginLeft': '5%'}}>
            <h2>{this.state.pizzaSelected.name}</h2>
            <p>{this.state.pizzaSelected.des}</p>
          </div>
        </div>
        <div>
          <h4>CHOOSE A SIZE</h4>
          <div style= {{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
            <div className= 'pizza-size' id='pizza-size-small' onClick= {()=> {this.selectSize('small')}} style= {{'width': '40%', 'boxShadow': '0 4px 10px rgb(74 74 74 / 30%)', 'border': '1px solid rgb(224, 222, 217)', 'textAlign': 'center', 'borderRadius': '4px', 'cursor' : 'pointer'}}>
              <p>Small(12-inch)</p>
              <p>{`$${this.state.pizzaSelected.price.small.toFixed(2)}`}</p>
            </div>
            <div className= 'pizza-size' id='pizza-size-large' onClick= {()=> {this.selectSize('large')}} style= {{'width': '40%', 'boxShadow': '0 4px 10px rgb(74 74 74 / 30%)', 'border': '1px solid rgb(224, 222, 217)', 'textAlign': 'center', 'borderRadius': '4px', 'cursor': 'pointer'}}>
              <p>Large(18-inch)</p>
              <p>{`$${this.state.pizzaSelected.price.large.toFixed(2)}`}</p>
            </div>
          </div>
          {this.state.pizzaSelected.ingredients.length ? <h4>YOUR INCLUDED TOPPINGS</h4> : null}
          <div style= {{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
          {this.state.pizzaSelected.ingredients.map((ingredient)=><PizzaTopping name= {ingredient} size = {this.state.pizzaSize} selected= {true}/>)}
          </div>
          </div>
          {this.state.pizzaSelected.ingredients.length ? <h4>ADD TOPPINGS</h4> : null}
          <div style= {{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
          {this.state.pizzaSelected.ingredients.map((ingredient)=><PizzaTopping name= {ingredient} size = {this.state.pizzaSize} selected= {false}/>)}
        </div>
      </Modal>
      }


    </div>
  );
}
}

export default Pizza;



