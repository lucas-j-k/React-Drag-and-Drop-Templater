import React, { Component } from 'react';
import Header from './components/header';
import ComposerPanel from './components/composer-panel';
import TemplateTray from './components/template-tray';
import Footer from './components/footer';

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
  }



  //Custom method to push a new snippet onto the composer contents state
  addToComposerContents(templateToAdd){
    let objectToAdd = {
      id: templateToAdd.id,
      text: templateToAdd.body
    }
    let updatedComposerContents = this.state.composerContents.slice();
    updatedComposerContents.push(objectToAdd);
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

  render() {
    return (
      <div className="App container" style={{backgroundColor: 'blue'}}>
        <Header navigation={this.state.navigation} />
        <ComposerPanel composerContents={this.state.composerContents} deleteSnippetFromComposer={this.deleteSnippetFromComposer} />
        <TemplateTray templates={this.state.templates} handleTrayClick={this.addToComposerContents} />
        <Footer />
      </div>
    );
  }
}

export default App;
