import React from 'react'


class PizzaDes extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    let pizzaDescription = {
      fourCheese: 'A pizza with every cheese imaginable, if you only imagine four cheeses',
      veg: 'A garden on a pizza!',
      byo: 'Choose your toppings below',
      none: 'Please select a pizza'
    };
    return(
      <p>{pizzaDescription[this.props.type]}</p>
    );
  }
}

export default PizzaDes;