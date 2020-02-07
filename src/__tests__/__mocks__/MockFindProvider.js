import React, { Component } from 'react';
import FindContext from '../../contexts/find/FindContext';

export default class MockFindProvider extends Component {
  render() {
    return (
      <FindContext.Provider
        value={{
          toggleShowFind: jest.fn(),
          showFind: false
        }}
      >
        {this.props.children}
      </FindContext.Provider>
    );
  }
}
