import React from 'react';
import Modal from 'react-modal';


class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.state={
      modalIsOpen: false,
    }
  }


  render(){
    return(
      <div>
        <h1>Pizza</h1>
        <button onClick= {()=> this.setState({modalIsOpen:true})}>Order Pizza</button>
        <Modal isOpen ={this.state.modalIsOpen}
         onRequestClose= {()=> this.setState({modalIsOpen:false})}
          style={{
          'overlay': {'background':'grey'},
          'content': {'color':'black', 'width': '450px', 'margin':'auto'} }}>
             <span style={{'float': 'right', 'fontSize': '150%'}} onClick= {()=> this.setState({modalIsOpen:false}) }>&#10006;</span>
             <form name= 'pizza-order' id= 'pizza-order-form'>
              <h2>Order Your Pizza</h2>
              <label for = 'customer-first-name'>First Name: </label>
               <input type= 'text' name= 'customer-first-name' required></input> <br></br>
               <label for = 'customer-last-name'>Last Name: </label>
               <input type= 'text' name= 'customer-last-name' required></input>
             </form>
          </Modal>
      </div>
    );
  }
}

export default Pizza;
