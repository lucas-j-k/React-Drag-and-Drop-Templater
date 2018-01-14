import React, { Component } from 'react';
import Dragula from 'react-dragula';

class ComposerPanel extends Component {

  constructor(props) {
    super(props)
    this.deleteSnippet = this.deleteSnippet.bind(this);
  }

  //Handle when a user clicks delete icon inside a composer paragraph
  deleteSnippet(index, e){
    e.preventDefault();
    this.props.deleteSnippetFromComposer(index);
  }

  render(){
    //Map through the templates currently loaded into the composer array, and print them to the composer panel
    const composerContents = this.props.composerContents.map((snippet, index)=>{
      return <p key={index}>{snippet.text}<a href="" onClick={(e) => this.deleteSnippet(index, e)}>[X] {index}</a></p>
    });
    return (
      <div className="col-md-7" ref={this.dragulaDecorator}>
        {composerContents}
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
