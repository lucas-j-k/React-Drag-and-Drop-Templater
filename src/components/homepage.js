import React, { Component } from 'react';



class Homepage extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className="homepage">
        <h1 className="homepage__title">Templater</h1>
        <div className="homepage__wrapper">
          <section className="homepage-section">
            <div className="homepage-section__icon-wrapper">
              <i className="fa fa-pencil homepage-section__icon" aria-hidden="true"></i>
            </div>
            <h2 className="homepage-section__heading">Create & Edit</h2>
            <div className="homepage-section__text">
              <p className="homepage-section__para">Create email templates from reusable text snippets.</p>
            </div>
          </section>

          <section className="homepage-section">
            <div className="homepage-section__icon-wrapper">
              <i className="fa fa-mouse-pointer homepage-section__icon" aria-hidden="true"></i>
            </div>
            <h2 className="homepage-section__heading">Drag & Drop</h2>
            <div className="homepage-section__text">
              <p className="homepage-section__para">Move, add and delete snippets of text to quickly customise templates</p>
            </div>
          </section>

          <section className="homepage-section">
            <div className="homepage-section__icon-wrapper">
              <i className="fa fa-floppy-o homepage-section__icon" aria-hidden="true"></i>
            </div>
            <h2 className="homepage-section__heading">Save & Reuse</h2>
            <div className="homepage-section__text">
              <p className="homepage-section__para">Store commonly used templates for future use</p>
            </div>
          </section>
          </div>
          <div className="homepage__cta">
            <div className="button button--positive homepage__cta-button">Get Started</div>
          </div>
      </div>
    )
  }

}

export default Homepage;
