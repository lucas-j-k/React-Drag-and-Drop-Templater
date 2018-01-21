import React, { Component } from 'react';

class FlashBar extends Component {
  render(){
    return (
      <div className="flash-messages__container">
        <div className="flash-messages__message">
          <p className="flash-message__message-text flash-message__message--positive">
            {this.props.message}
          </p>
        </div>
      </div>
    )
  }

}

export default FlashBar;
