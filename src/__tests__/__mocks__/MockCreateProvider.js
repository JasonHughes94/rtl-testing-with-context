import React, { Component } from 'react';
import CreateContext from '../../contexts/create/CreateContext';

export default class MockCreateProvider extends Component {
  render() {
    return (
      <CreateContext.Provider
        value={{
          toggleShowCreate: jest.fn(),
          showCreate: false
        }}
      >
        {this.props.children}
      </CreateContext.Provider>
    );
  }
}
