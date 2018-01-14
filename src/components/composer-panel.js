import React, { Component } from 'react';
import Dragula from 'react-dragula';

class ComposerPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newOrder: []
    }
    //Bind custom methods to this
    this.deleteSnippet = this.deleteSnippet.bind(this);
    this.updateComposerOrder = this.updateComposerOrder.bind(this);
  }

  //Handle when a user clicks delete icon inside a composer paragraph
  deleteSnippet(index, e){
    e.preventDefault();
    this.props.deleteSnippetFromComposer(index);
  }

  //When a paragraph is re-ordered, we need to update the composer-contents State
  updateComposerOrder(e){
    let nodeList = Array.from(this.paraList.children[0].children);
    let mappedArray = nodeList.map((node, index)=>{
      return node.innerHTML;
    });
    console.log(mappedArray);
    this.setState({
      newOrder: mappedArray
    });
  }

  render(){
    //Map through the templates currently loaded into the composer array, and print them to the composer panel
    const composerContents = this.props.composerContents.map((snippet, index)=>{
      return (<p key={index}>
              {snippet.text}
              <button href="" onClick={(e) => this.deleteSnippet(index, e)}>[X] {index}</button>
              </p>)
    });
    return (
      <div className="col-md-7" onMouseLeave={(e) => this.updateComposerOrder(e)} ref={(paraList)=>{ this.paraList = paraList }}>
        <div ref={this.dragulaDecorator}>{composerContents}</div>
      </div>
    )
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}



export default ComposerPanel;
