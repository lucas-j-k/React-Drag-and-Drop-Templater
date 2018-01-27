import React, { Component } from 'react';
import Dragula from 'react-dragula';

class ComposerPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    //Bind custom methods to this
    this.deleteSnippet = this.deleteSnippet.bind(this);
    this.reorderComposerContents = this.reorderComposerContents.bind(this);
    this.clearComposer = this.clearComposer.bind(this);
    this.openCreateTemplateForm = this.openCreateTemplateForm.bind(this);
  }

  //Handle when a user clicks delete icon inside a composer paragraph
  deleteSnippet(index, e){
    e.preventDefault();
    this.props.deleteSnippetFromComposer(index);
  }

  //When a paragraph is re-ordered, we need to update the composer-contents State. Store it in local state.
  reorderComposerContents(e){
    let nodeList = Array.from(this.paraList.children[0].children);
    let mappedArray = nodeList.map((node, index)=>{
      let elementKey = node.getAttribute('data-key');
      let updatedArray = {
        key: elementKey,
        text: node.textContent
      }
      return updatedArray;

    });
    this.props.updateComposerContents(mappedArray);
  }

  clearComposer(){
    this.props.clearComposer();
  }

  openCreateTemplateForm(){
    this.props.openCreateTemplateForm();
  }

  render(){
    //Map through the templates currently loaded into the composer array, and print them to the composer panel
    const composerContents = this.props.composerContents.map((snippet, index)=>{
      return (<p className="composer-panel__paragraph" key={snippet.key} data-key={snippet.key} >
              <span className="composer-panel__paragraph-text">{snippet.text}</span>
              <span className="composer-panel__delete-button" href="" onClick={(e) => this.deleteSnippet(index, e)}>
                <i className="composer-panel__delete-icon fa fa-window-close" aria-hidden="true"></i>
              </span>
              </p>)
    });
    return (
      <div className="col-md-7 composer-panel__wrapper" onMouseUp={this.reorderComposerContents} >
        <div className="composer-panel__main" ref={(paraList)=>{ this.paraList = paraList }} >
          <div className="composer-panel__contents" ref={this.dragulaDecorator}>{composerContents}</div>
        </div>

      </div>
    )
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { revertOnSpill: true };
      Dragula([componentBackingInstance], options);
    }
  };
}



export default ComposerPanel;
