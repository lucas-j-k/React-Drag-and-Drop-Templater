import React, { Component } from 'react';

class FlashBar extends Component {
  render(){
    return (
      <div className="row">
        <div className="col">
          {this.props.message}
        </div>
      </div>
    )
  }

}

export default FlashBar;
