import React, { Component } from 'react';


//PROPS passed in:
// templates: array of objects
class TemplateTray extends Component {


  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
  }

  handleClick(templateText, e){
    console.log(templateText);
    this.props.handleTrayClick(templateText);
  }

  openEditForm(id, label, content){
    this.props.openEditForm(id, label, content)
  }

  render(){
    //Turn the array or template objects in props, into an array of React Child <li> nodes using .map().
    //We pass the id in as the 'key' prop, so React can keep track of which items change during a re-render cycle.
    const templatesList = this.props.templates.map((template)=>{
      return <li className="template-tray__list-item" key={template.id} onClick={(e) => this.handleClick(template.body, e)}><span className="template-tray__label-text">{template.label}</span><span className="template-tray__edit-button" onClick={(e) => this.openEditForm(template.id, template.label, template.body)} ><i className="fa fa-pencil-square-o template-tray__edit-icon" aria-hidden="true"></i></span></li>;
    });

    //Return a div wrapping a list. Since the templatesList is an array of nodes, not just text, we can call it directly and React
    //will print out the markup:
    return (
      <div className="template-tray">
        <ul className="template-tray__list">
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
