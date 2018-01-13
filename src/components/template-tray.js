import React, { Component } from 'react';


//PROPS passed in:
// templates: array of objects
class TemplateTray extends Component {
  render(){
    //Turn the array or template objects in props, into an array of React Child <li> nodes using .map().
    //We pass the id in as the 'key' prop, so React can keep track of which items change during a re-render cycle.
    const templatesList = this.props.templates.map((template)=>{
      return <TrayListItem label={template.label} key={template.id} />;
    });

    console.log(templatesList);
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

//Stateless functional component for each list item in the tray list
function TrayListItem(props){
  return (
    <li>{props.label}</li>
  )
}

export default TemplateTray;
