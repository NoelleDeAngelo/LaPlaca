import React from 'react'


class PizzaDes extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    let pizzaDescription = {
      cheese:{
        name: 'Four Cheese',
        des:'A pizza with every cheese imaginable, if you only imagine four cheeses.',
        ingredients: ['redSauce', 'blueCheese', 'mozzarella', 'feta', 'parmesan'],
        price:{small: 16.00, large: 19.00},
        picture: '../../dist/PeperoniPizza.jpg',
      } ,
      veg:{
        name: 'Vegetable',
        des: 'A garden on a pizza!',
        ingredients:['redSauce','mozzarella', 'broccoli', 'bellPepper', 'garlic', 'onion', 'tomatoes', 'artichokes'],
        price:{small: 19.00, large: 22.00},
        picture: '../../dist/VegPizza.jpg',
      },
      byo: {
        name:'Build Your Own',
        des:'Pick your toppings',
        ingredients:[],
        price:{small: 15.00, large: 18.00},
        picture: '../../dist/ByoPizza.jpg'
      },
      none: 'Please select a pizza'
    };

    let pizza = pizzaDescription[this.props.type];

    return(
      <div  onClick= {()=> this.props.selectPizza(pizza)}className = 'pizza-card flex-column'>
        <img src= {pizza.picture} ></img>
        <div className= 'pizza-card-text'>
          <h3>{pizza.name}</h3>
          <p>{pizza.des}</p>
        </div>

      </div>

    );
  }
}

export default PizzaDes;