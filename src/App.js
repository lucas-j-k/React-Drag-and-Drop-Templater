import React, { Component } from 'react';
import axios from 'axios';
import {Route, Switch } from 'react-router-dom'
import ComposerPanel from './components/composer-panel';
import ControlBar from './components/control-bar';
import TemplateTray from './components/template-tray';
import Footer from './components/footer';
import FlashBar from './components/flash-bar';
import Modal from './components/modal';
import Header from './components/header';
import {CopyToClipboard} from 'react-copy-to-clipboard';

//Import the master components for each route
import Homepage from './components/homepage';
import Login from './components/login'
import SignUp from './components/sign-up'

//Import the form modules
import CreateTemplateForm from './components/forms/create-template-form';
import EditTemplateForm from './components/forms/edit-template-form';

//Import dummy data from js modules to populate the app to begin with (since we are not hooked up to an api at this point)
import templateData from './dummy-data/templates';
import userData from './dummy-data/user';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      templates: [],
      user:{},
      clipboard:"Test clipboard!",
      composerContents: [],
      showModal: false,
      flash:null,
      showFlash:false,
      form: null,
      currentlyEditing: {
        id: "",
        label: "",
        content: ""
      }
    }
    this.displayModal = this.displayModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.flash = this.flash.bind(this);
    this.clearFlash = this.clearFlash.bind(this);
    this.deleteSnippetFromComposer = this.deleteSnippetFromComposer.bind(this);
    this.updateComposerContents = this.updateComposerContents.bind(this);
    this.clearComposer = this.clearComposer.bind(this);
    this.updateClipboard = this.updateClipboard.bind(this);
    this.addToComposerContents = this.addToComposerContents.bind(this);
    this.openCreateForm = this.openCreateForm.bind(this);
    this.openEditForm = this.openEditForm.bind(this);

  }



  componentDidMount(){
    //Map through the dummy template data and populate the state array with it.
    let templateArray = templateData.map((record)=>{
      let newTemplate = {
        id: record.id,
        label: record.label,
        body: record.body
      };
      return newTemplate;
    });
    this.setState({
      templates: templateArray,
      user: userData
    })
  }


  displayModal(){
    this.setState({ showModal:true });
  }

  hideModal(){
    this.setState({ showModal:false, form:null });
  }

  openCreateForm(){
    this.setState({
      form: "create-template",
      showModal: true
    });
  }

  openEditForm(templateId, templateLabel, templateContent){
    let templateToEdit = {
      id: templateId,
      label: templateLabel,
      content: templateContent
    }
    this.setState({
      currentlyEditing: templateToEdit,
      form: "edit-template",
      showModal: true
    });
  }

  //Custom method to push a new snippet onto the composer contents state. The templateText is an array based on each line of text, so we
  //loop through and create each line inside its own paragraph tag.
  addToComposerContents(templateText){
    let updatedComposerContents = this.state.composerContents.slice();
    for(let i = 0; i<templateText.length; i++){
      let snippetToAdd = {
        key: Math.floor(Math.random()*100000),
        text: templateText[i]
      }
      updatedComposerContents.push(snippetToAdd);
    }
    let updatedClipboard = this.updateClipboard(updatedComposerContents);
    this.setState({
      composerContents: updatedComposerContents,
      clipboard: updatedClipboard,
    });
  }

  //Delete a specific snippet from the composer state array
  deleteSnippetFromComposer(index){
    let updatedComposerContents = this.state.composerContents.slice();
    updatedComposerContents.splice(index, 1);
    let updatedClipboard = this.updateClipboard(updatedComposerContents);
    this.setState({
      composerContents: updatedComposerContents,
      clipboard: updatedClipboard
    });
  }

  //Reorder the composercontents state, based on the contents of the current composer panel.
  updateComposerContents(updatedComposerContents){
    let updatedClipboard = this.updateClipboard(updatedComposerContents);
    this.setState({
      composerContents: updatedComposerContents,
      clipboard: updatedClipboard
    });
  }

  //Function to loop through current templatecontents and build a string to populate the clipboard.
  updateClipboard(composerContents){
    let clipboardArray = composerContents.map((record)=>{
      return record.text;
    });
    let clipboardString = clipboardArray.join("\n");
    return clipboardString;
  }


  //Clear the current composer contents state and re-render blank composer ComposerPanel
  clearComposer(){
    this.setState({
      composerContents: [],
      clipboard: " ",
    }, ()=>{
      this.flash("Cleared");
    })
  }

  //Add a flash message to the state, so we can pass it into the flashbar component.
  flash(message){
    this.setState({
      flash:message,
      showFlash: true
    }, ()=>{
      window.setTimeout(()=>{
        this.setState({
          flash: null,
          showFlash:false
         })
      }, 1000)

    });
  }

  //Clear the flash message stored on the main app state, to avoid it constantly being passed down to flashbar with every rerender
  clearFlash(){
    console.log("Cleaed flash at app level");
    this.setState({flash: null});
  }

  render() {
    let formToRender = "";
    // Check the state to see which form to load in the modalContent
    switch(this.state.form) {
    case "create-template":
        formToRender = <CreateTemplateForm />;
        break;
    case "edit-template":
        formToRender = <EditTemplateForm currentlyEditing={this.state.currentlyEditing} />;
        break;
    default:
        formToRender = null;
}


    //Check the state modal value to see if we render the modal using a ternary statement
    let modalContent = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="modal-body">
            <span title="Close Modal" className="modal__close" onClick={ this.hideModal }><i className="fa fa-times modal__close-icon"></i></span>
            {formToRender}
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="App app-container">
        <Header user={this.state.user} />
        <FlashBar message={this.state.flash} showFlash={this.state.showFlash} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/app' render={() => (
            <div className="app-wrapper">
              <ControlBar clearComposer={this.clearComposer} openCreateTemplateForm={this.openCreateForm} clipboard={this.state.clipboard} flash={this.flash} />
              <div className="interface-wrapper">
                <ComposerPanel
                  clipboard={this.state.clipboard}
                  composerContents={this.state.composerContents}
                  clearComposer={this.clearComposer}
                  openCreateTemplateForm={this.openCreateForm}
                  deleteSnippetFromComposer={this.deleteSnippetFromComposer}
                  updateComposerContents={this.updateComposerContents}
                />
                <TemplateTray templates={this.state.templates} handleTrayClick={this.addToComposerContents} openEditForm={this.openEditForm} />
              </div>
              </div>
            )} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-up' component={SignUp} />
          </Switch>
          <Footer />
          {modalContent}
        </div>
      );
  }
}

export default App;
