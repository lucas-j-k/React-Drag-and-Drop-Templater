import React, { Component } from 'react';

class ControlBar extends Component {

  constructor(props) {
    super(props)
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleClearClick(e){
    console.log("Clear Click fired");
    this.props.clearComposer();
  }

  render(){
    return (
      <div className="row">
        <div className="col">
          <button>Copy</button>
          <button onClick={(e) => this.handleClearClick(e)}>Clear</button>
        </div>
      </div>
    )
  }

}

export default ControlBar;
