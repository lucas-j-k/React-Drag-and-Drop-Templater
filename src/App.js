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
      composerContents: [
        {
          text: "Lorem Ipsum dolor sic amet",
        },
        {
        text: "Second paragraph...",
        }
    ]
    }
  }

  render() {
    return (
      <div className="App container" style={{backgroundColor: 'blue'}}>
        <Header navigation={this.state.navigation} />
        <ComposerPanel composerContents={this.state.composerContents} />
        <TemplateTray templates={this.state.templates} />
        <Footer />
      </div>
    );
  }
}

export default App;
