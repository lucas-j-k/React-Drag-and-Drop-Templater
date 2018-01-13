import React, { Component } from 'react';

class TemplateTray extends Component {
  render(){
    console.log("Template tray rendered: ", Date());
    return (
      <div style={{backgroundColor: 'goldenrod'}}>
        "This is the template tray, this holds the previews for the templates, which when clicked will load the body into the composer panel"
      </div>
    )
  }
}

export default TemplateTray;
