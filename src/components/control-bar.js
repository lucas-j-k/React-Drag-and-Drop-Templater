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
              <div className="icon-button button button--positive control-bar__button">
                <span className="icon-button__text">Copy</span>
                <span className="icon-button__icon-wrapper icon-button__icon-wrapper--positive">
                  <i className="fa fa-files-o icon-button__icon" aria-hidden="true"></i>
                </span>
              </div>
            </CopyToClipboard>

            <div className="icon-button button button--negative control-bar__button" onClick={(e) => this.handleClearClick(e)}>
              <span className="icon-button__text">Clear</span>
              <span className="icon-button__icon-wrapper icon-button__icon-wrapper--negative">
                <i className="fa fa-trash icon-button__icon" aria-hidden="true"></i>
              </span>
            </div>

          </div>
          <div className="control-bar__tray-buttons">
            <div className="icon-button button button--positive template-tray-button" onClick={(e) => this.openCreateTemplateForm(e)}>
              <span className="icon-button__text">New Template</span>
              <span className="icon-button__icon-wrapper icon-button__icon-wrapper--positive">
                <i className="fa fa-plus icon-button__icon" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ControlBar;
