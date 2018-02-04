import React, { Component } from 'react';

class FlashBar extends Component {

  render(){
    //run  a ternary check on showFlash in props, to see whether to render the flash html or nothing
    let flashHTML = this.props.showFlash ? (
        <div className="flash-messages__container">
          <div className="flash-messages__message flash-message__message--positive">
            <p className="flash-message__message-text">
              {this.props.message}
            </p>
          </div>
        </div>
      ) : null
      return flashHTML;
    }
}

export default FlashBar;
