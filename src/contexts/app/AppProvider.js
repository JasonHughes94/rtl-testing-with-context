import React, { Component } from 'react';

import CreateProvider from '../create/CreateProvider';
import FindProvider from '../find/FindProvider';

export default class AppProvider extends Component {
  render() {
    return (
      <CreateProvider {...this.props}>
        <FindProvider {...this.props}>{this.props.children}</FindProvider>
      </CreateProvider>
    );
  }
}
