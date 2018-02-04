import React, { Component } from 'react';

class FlashBar extends Component {

  constructor(props){
    super(props);
    this.state= {
      message: this.props.message
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      message: nextProps.message
    });
    window.setTimeout(()=>{
      this.setState({
        message:null
      })
    }, 2500);
  }

  render(){
    return (
      <div className="flash-messages__container">
        <div className="flash-messages__message">
          <p className="flash-message__message-text flash-message__message--positive">
            {this.state.message}
          </p>
        </div>
      </div>
    )
  }

}

export default FlashBar;
