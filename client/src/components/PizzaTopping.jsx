import React from 'react'


class PizzaTopping extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selected:this.props.selected,
    }
  }

  render(){
    let toppings = {
      redSauce: {name: 'Red Sauce', price:{small: 0, large: 0}},
      whiteSauce: {name: 'White Sauce', price:{small: 0, large: 0}},
      mozzarella: {name: 'Mozzarella', price:{small: 0.5, large: 1}},
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
    }



    return(
      <div onClick= {()=>{this.setState((state)=>{return {selected: !state.selected}})}} className= 'pizza-topping-card' id={this.props.name} style= {{'border': (this.state.selected ? '1px solid #cc2b2b' : 'none' )}}>
              <p>{toppings[this.props.name].name}</p>
              {this.props.size  && !this.props.selected ? <p>${toppings[this.props.name].price[this.props.size].toFixed(2)}</p> : null}
            </div>

    );
  }
}

export default PizzaTopping;