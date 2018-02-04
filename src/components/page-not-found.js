import React, { Component } from 'react';


class PageNotFound extends Component {


  render() {
    return (
      <div className="page-not-found body-section">
        <p className="util-center util-generic-h2 page-not-found__error-code" >404</p>
        <h1 className="util-center util-generic-h1 page-not-found__title">Page Not Found</h1>
        <p className="util-center util-generic-p">The requested page could not be found, please double check the URL</p>
      </div>
    );
  }

}

export default PageNotFound;
