import React from 'react';
import Modal from 'react-modal';
import PizzaDes from '../components/PizzaDes.jsx'
import PizzaTopping from '../components/PizzaTopping.jsx'



class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.selectPizza = this.selectPizza.bind(this)
    this.updatePizzaPrice = this.updatePizzaPrice.bind(this)
    this.state={
      modalIsOpen: false,
      pizzaSelected: 'none',
      pizzaSize: null,
      pizzaPrice:0,
      added:[],
    }
    this.toppings = {
      redSauce: {name: 'Red Sauce', price:{small: 0, large: 0}},
      whiteSauce: {name: 'White Sauce', price:{small: 0, large: 0}},
      mozzarella: {name: 'Mozzarella', price:{small: 0, large: 0}},
      blueCheese: {name: 'Blue Cheese', price:{small: .75, large: 1.75}},
      feta: {name: 'Feta', price:{small: 1.75, large: 3}},
      parmesan: {name: 'Parmesan', price:{small: .5, large: 1}},
      broccoli: {name: 'Broccoli', price:{small: 1.5, large: 3}},
      bellPepper:{ name: 'Bell Pepper', price:{small: 1.5, large: 2.5}},
      garlic: {name: 'Garlic', price:{small: 1.5, large: 2.5}},
      onion: {name: 'Red Onion', price:{small: 0.75, large: 2}},
      tomatoes: {name: 'Tomatoes', price:{small: 1.75, large: 3}},
      artichokes: {name: 'Artichokes', price:{small: 3, large: 4}},
      mushroom: {name: 'Mushroom', price:{small: 3, large: 4}},
      chicken: {name: 'Chicken', price:{small: 2, large: 4}},
      bacon: {name: 'Bacon', price:{small: 1.5, large: 3.5}},
      pepperoni: {name: 'Pepperoni', price:{small: 2, large: 4}},
    }

  }

  determineNotIncluded(included){
    var notIncluded = []
    for (var key in this.toppings){
      if (included.indexOf(key) === -1){
        notIncluded.push(key)
      }
    }
    return notIncluded;
  }

  selectPizza(pizza){
    pizza.notIncluded = this.determineNotIncluded(pizza.ingredients)
    this.setState({modalIsOpen: true, pizzaSelected: pizza, pizzaPrice: 0, pizzaSize: null});
  }

  selectSize(size){
    var addedIngredientsPrice = this.state.added.reduce((acc,b)=> acc + this.toppings[b].price[size] , 0)
    var totalPrice = this.state.pizzaSelected.price[size] + addedIngredientsPrice;
    this.setState({pizzaSize: size, pizzaPrice: totalPrice })
    var sizeElms= document.getElementsByClassName('pizza-size');
    for(var i =0; i< sizeElms.length; i++){
      sizeElms[i].style.border= '2px solid rgb(224, 222, 217)'
    }
    document.getElementById('pizza-size-'+ size).style.border= '1px solid #cc2b2b'
  }
  updatePizzaPrice(ingredient, ingredientPrice, selected, included){
    if (included){return};
    if (selected){
      var added = this.state.added
      added.push(ingredient)
      this.setState((state)=>{return {added: added, pizzaPrice: state.pizzaPrice + ingredientPrice}})
    } else {
      var added = this.state.added;
      added= added.filter((add)=>add !== ingredient)
      this.setState((state)=>{return {added: added, pizzaPrice: state.pizzaPrice - ingredientPrice}})
    }
  }

  closeModal(){
    this.setState({modalIsOpen:false, pizzaSelected: 'none'})
  }

  handleAddToCart(){
    var currentPizza= {
      name:this.state.pizzaSelected.name,
      price: this.state.pizzaPrice,
      ingredients: this.state.pizzaSelected.ingredients,
      added: this.state.added

    }
    this.props.updateCartTotal(false, currentPizza.price);
    this.props.updatePizzasOrdered(false, currentPizza)
    this.closeModal()
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
        <PizzaDes selectPizza = {this.selectPizza} type= 'meat'/>
        <PizzaDes selectPizza = {this.selectPizza} type= 'byo'/>
      </div>
      {this.state.pizzaSelected !== 'none' &&
      <Modal
        isOpen ={this.state.modalIsOpen}
        onRequestClose= {()=> this.setState({modalIsOpen:false, pizzaSelected: 'none'})}
        style={{
          'overlay': {'background': 'rgb(74 74 74 / 45%)'},
          'content': {'boxShadow': '0 4px 10px rgb(74 74 74 / 30%)', 'color':'black', 'width': '60%', 'maxWidth': '750px', 'margin':'auto', 'display': 'flex', 'flexDirection': 'column'} }}>
        <span style={{'float': 'right', 'fontSize': '150%', 'alignSelf': 'end', 'cursor': 'pointer'}} onClick= {()=>{this.closeModal()}}>&#10006;</span>
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
          {this.state.pizzaSelected.ingredients.map((ingredient)=><PizzaTopping  ingredient = {ingredient} updatePizzaPrice = {this.updatePizzaPrice} name= {this.toppings[ingredient].name} price = {this.toppings[ingredient].price[this.state.pizzaSize]} size= {this.state.pizzaSize} selected= {true} included= {true}/>)}
          </div>
          </div>
          <h4>ADD TOPPINGS</h4>
          <div style= {{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly' }}>
          {this.state.pizzaSelected.notIncluded.map((ingredient)=><PizzaTopping ingredient = {ingredient} updatePizzaPrice = {this.updatePizzaPrice} name= {this.toppings[ingredient].name} price = {this.toppings[ingredient].price[this.state.pizzaSize]}  size= {this.state.pizzaSize}  selected= {false} included= {false}/>)}
        </div>
        <button onClick= {()=>{this.handleAddToCart()}} className= 'add-to-cart'>ADD TO ORDER - ${this.state.pizzaPrice.toFixed(2)}</button>
      </Modal>
      }


    </div>
  );
}
}

export default Pizza;



