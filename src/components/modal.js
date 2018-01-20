import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Store the modal root node from the dom in a constant:
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props){
    super(props);
    //When the component is called, create a detatched div node, to append the modal children to. We then
    //attach this node into the modal-root, rather than attaching the children directly.
    this.shellElement = document.createElement('div');
  }

  componentDidMount(){
    modalRoot.appendChild(this.shellElement);
    console.log("Modal added to modal-root -----", this.props.children);
  }
  componentWillUnmount(){
    modalRoot.removeChild(this.shellElement);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.shellElement,
    );
  }

}

export default Modal;
