import React, { Component } from 'react';

import CreateContext from './CreateContext';

export default class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreate: false
    };
  }

  toggleShowCreate = () => {
    this.setState({ showCreate: !this.state.showCreate });
  };

  render() {
    return (
      <CreateContext.Provider
        value={{
          toggleShowCreate: this.toggleShowCreate,
          showCreate: this.state.showCreate
        }}
      >
        {this.props.children}
      </CreateContext.Provider>
    );
  }
}
