import React, { Component } from 'react';



class TestForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    )
  }

}

export default TestForm;
