import React, { Component } from 'react';

import MockCreateProvider from './MockCreateProvider';
import MockFindProvider from './MockFindProvider';

export default class MockAppProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MockCreateProvider {...this.props}>
        <MockFindProvider {...this.props}>
          {this.props.children}
        </MockFindProvider>
      </MockCreateProvider>
    );
  }
}
