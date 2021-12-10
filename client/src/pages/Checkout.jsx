import React from 'react'


class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state= {
    }


  }
 deletePizza(pizza){
    this.props.updatePizzasOrdered(true, pizza)
    this.props.updateCartTotal(true, pizza.price)
  }

  render(){
    return <div>
      <h1 className = 'pageTitle'>Checkout</h1>
      {this.props.pizzasOrdered.map((pizza)=>{return <div>
        <h3>{pizza.name}</h3><i  onClick= {()=>{this.deletePizza(pizza)}} class="far fa-trash-alt fa-sm"></i>
        <ul>
          {pizza.ingredients.map((ingredient)=>{return <li>{ingredient}</li>})}
          {pizza.added.map((ingredient)=>{return <li>{ingredient}</li>})}
        </ul>
        </div>})}
      <h2>Total</h2>
      <p>{this.props.total}</p>

    </div>
  }
}

export default Checkout;