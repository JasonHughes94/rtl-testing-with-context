import React, { Component } from 'react';

import FindContext from './FindContext';

export default class FindProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFind: false
    };
  }

  toggleShowFind = () => {
    this.setState({ showFind: !this.state.showFind });
  };

  render() {
    return (
      <FindContext.Provider
        value={{
          toggleShowFind: this.toggleShowFind,
          showFind: this.state.showFind
        }}
      >
        {this.props.children}
      </FindContext.Provider>
    );
  }
}
