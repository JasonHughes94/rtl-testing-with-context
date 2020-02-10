import React, { Component } from 'react';
import CreateContext from '../../contexts/create/CreateContext';

export default class MockCreateProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CreateContext.Provider
        value={{
          toggleShowCreate: this.props.toggleShowCreate,
          showCreate: this.props.showCreate
        }}
      >
        {this.props.children}
      </CreateContext.Provider>
    );
  }
}
