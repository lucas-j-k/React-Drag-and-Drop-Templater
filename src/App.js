import React, { Component } from 'react';
import Header from './components/header';
import ComposerPanel from './components/composer-panel';
import TemplateTray from './components/template-tray';
import Footer from './components/footer';
import FlashBar from './components/flash-bar';


//Import the dummy data we are using in place of an API response.
import templateData from './dummy-data/templates'
import navData from './dummy-data/nav'

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      templates: templateData,
      navigation: navData,
      composerContents: []
    }
    this.addToComposerContents = this.addToComposerContents.bind(this);
    this.deleteSnippetFromComposer = this.deleteSnippetFromComposer.bind(this);
    this.updateComposerContents = this.updateComposerContents.bind(this);
    this.clearComposer = this.clearComposer.bind(this);

  }


  //Custom method to push a new snippet onto the composer contents state
  addToComposerContents(templateText){
    let snippetToAdd = {
      key: Math.floor(Math.random()*1000),
      text: templateText
    }
    let updatedComposerContents = this.state.composerContents.slice();
    updatedComposerContents.push(snippetToAdd);
    this.setState(prevState => ({
      composerContents: updatedComposerContents
    }));
  }

  //Delete a specific snippet from the composer state array
  deleteSnippetFromComposer(index){
    let updatedComposerContents = this.state.composerContents.slice();
    updatedComposerContents.splice(index, 1);
    this.setState({
      composerContents: updatedComposerContents
    });
  }

  //Reorder the composercontents state, based on the contents of the current composer panel.
  updateComposerContents(updatedComposerContents){
    /* TODO - Concat the text values of each object in the composer contents, then pass it down as a new prop, so we can render it in the textarea to copy */
    this.setState({
      composerContents: updatedComposerContents
    });
  }

  //Clear the current composer contents state and re-render blank composer ComposerPanel
  clearComposer(){
    this.setState({
      composerContents: []
    })
  }

  render() {
    return (
      <div className="App container-fluid p-2">
        <Header navigation={this.state.navigation} />
        <FlashBar message={"Flash messages go in here"} />
        <div className="row">
          <ComposerPanel clipboard={this.state.clipboard} composerContents={this.state.composerContents} clearComposer={this.clearComposer} deleteSnippetFromComposer={this.deleteSnippetFromComposer} updateComposerContents={this.updateComposerContents} />
          <TemplateTray templates={this.state.templates} handleTrayClick={this.addToComposerContents} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
