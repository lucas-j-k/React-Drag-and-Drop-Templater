import React, { Component } from 'react';
import Header from './components/header';
import ComposerPanel from './components/composer-panel';
import TemplateTray from './components/template-tray';
import Footer from './components/footer';

//Import the dummy data we are using in place of an API response. This come in as an array of objects:
import templates from './dummy-data/templates'

class App extends Component {
  render() {
    console.log(templates);
    return (
      <div className="App container" style={{backgroundColor: 'blue'}}>
        <Header />
        <ComposerPanel />
        <TemplateTray />
        <Footer />
      </div>
    );
  }
}

export default App;
