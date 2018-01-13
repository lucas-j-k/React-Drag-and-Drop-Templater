import React, { Component } from 'react';


//PROPS passed in:
// templates: array of objects
class TemplateTray extends Component {


  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text, e){
    console.log("Clicked::::", text, e.target);
    this.props.handleTrayClick(text);
  }

  render(){
    //Turn the array or template objects in props, into an array of React Child <li> nodes using .map().
    //We pass the id in as the 'key' prop, so React can keep track of which items change during a re-render cycle.
    const templatesList = this.props.templates.map((template)=>{
      return <li key={template.id} onClick={(e) => this.handleClick(template.body, e)}>{template.label}</li>;
    });

    //Return a div wrapping a list. Since the templatesList is an array of nodes, not just text, we can call it directly and React
    //will print out the markup:
    return (
      <div style={{backgroundColor: 'goldenrod'}}>
        <ul>
          {templatesList}
        </ul>
      </div>
    )
  }
}

// //Stateless functional component for each list item in the tray list
// function TrayListItem(props){
//   return (
//     <li onClick={props.handleClick}>{props.label}</li>
//   )
// }

export default TemplateTray;
