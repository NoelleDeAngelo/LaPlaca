import React from 'react'


class PizzaTopping extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selected:this.props.selected,
    }
  }
  handleIngredientClick(size){
    if(size){
       this.setState((state)=>{return {selected: !state.selected}}, ()=> {this.props.updatePizzaPrice(this.props.price, this.state.selected, this.props.included)})
    }

  }

  render(){

    return(
      <div onClick= {()=>{this.handleIngredientClick(this.props.size)}} className= 'pizza-topping-card' id={this.props.name} style= {{'border': (this.state.selected ? '1px solid #cc2b2b' : 'none' )}}>
              <p>{this.props.name}</p>
              {this.props.price  && !this.props.included ? <p>${this.props.price.toFixed(2)}</p> : null}
            </div>

    );
  }
}

export default PizzaTopping;