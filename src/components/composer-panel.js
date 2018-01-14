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
    this.updateComposerOrder();
    console.log("Index to Delete: ", index);
    this.props.deleteSnippetFromComposer(index);
  }

  //When a paragraph is re-ordered, we need to update the composer-contents State. Store it in local state then pass it up
  //to the main app component state
  updateComposerOrder(e){
    let nodeList = Array.from(this.paraList.children[0].children);
    console.log(nodeList);
    let mappedArray = nodeList.map((node, index)=>{
      return node.textContent;
    });
    this.setState({
      newOrder: mappedArray
    });
    this.props.updateComposerContents(this.state.newOrder);
  }

  render(){
    //Map through the templates currently loaded into the composer array, and print them to the composer panel
    const composerContents = this.props.composerContents.map((snippet, index)=>{
      return (<p key={snippet.key}>
              {snippet.text}
              <button href="" onClick={(e) => this.deleteSnippet(index, e)}>[X] {index}</button>
              </p>)
    });
    return (
      <div className="col-md-7" ref={(paraList)=>{ this.paraList = paraList }}>
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
