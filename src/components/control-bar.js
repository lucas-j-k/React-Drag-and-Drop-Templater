import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ControlBar extends Component {

  constructor(props) {
    super(props)
    this.handleClearClick = this.handleClearClick.bind(this);
    this.openCreateTemplateForm = this.openCreateTemplateForm.bind(this);
  }

  handleClearClick(e){
    this.props.clearComposer();
  }


  openCreateTemplateForm(formName){
    this.props.openCreateTemplateForm();
  }


  render(){
    return (
      <div className="control-bar">
        <div className="control-bar__button-tray">
          <div className="control-bar__composer-buttons">
            <CopyToClipboard text={this.props.clipboard}>
              <button className="button button--positive">Copy</button>
            </CopyToClipboard>
            <button className="control-bar__button button button--negative" onClick={(e) => this.handleClearClick(e)}>Clear</button>
          </div>
          <div className="control-bar__tray-buttons">
            <button className="control-bar__button button button--positive" onClick={(e) => this.openCreateTemplateForm()}>New Template</button>
          </div>
        </div>
      </div>
    )
  }

}

export default ControlBar;
