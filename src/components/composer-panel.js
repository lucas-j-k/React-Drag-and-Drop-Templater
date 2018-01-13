import React, { Component } from 'react';

class ComposerPanel extends Component {
  render(){

    //Map through the templates currently loaded into the composer array, and print them to the composer panel
    const composerContents = this.props.composerContents.map((snippet, index)=>{
      return <ComposerItem text={snippet.text} key={index} />;
    });

    return (
      <div style={{backgroundColor: 'red'}}>
        {composerContents}
      </div>
    )
  }
}


function ComposerItem(props){
  return (
    <p>{props.text}<a href="">[X]</a></p>
  )
}

export default ComposerPanel;
