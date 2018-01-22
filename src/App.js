import React, { Component } from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ComposerPanel from './components/composer-panel';
import TemplateTray from './components/template-tray';
import Footer from './components/footer';
import FlashBar from './components/flash-bar';
import Modal from './components/modal';

//Import the master components for each route
import Homepage from './components/homepage';
import Login from './components/login'
import SignUp from './components/sign-up'

//Import the form modules
import CreateTemplateForm from './components/forms/create-template-form';
import EditTemplateForm from './components/forms/edit-template-form';

//Import the dummy data we are using in place of an API response.
import templateData from './dummy-data/templates'

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      templates: templateData,
      composerContents: [],
      showModal: false,
      form: null,
      currentlyEditing: {
        id: "",
        label: "",
        content: ""
      }
    }
    this.displayModal = this.displayModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.deleteSnippetFromComposer = this.deleteSnippetFromComposer.bind(this);
    this.updateComposerContents = this.updateComposerContents.bind(this);
    this.clearComposer = this.clearComposer.bind(this);
    this.addToComposerContents = this.addToComposerContents.bind(this);
    this.openCreateForm = this.openCreateForm.bind(this);
    this.openEditForm = this.openEditForm.bind(this);

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
    console.log("To Edit....", templateToEdit)
    this.setState({
      currentlyEditing: templateToEdit,
      form: "edit-template",
      showModal: true
    });
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
            {formToRender}
            <button className="button button--negative modal__close" onClick={ this.hideModal }>Close Modal</button>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="App app-container">
        <Header navigation={this.state.navigation} />
        <FlashBar message={"Flash messages go in here"} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/app' render={() => (
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
