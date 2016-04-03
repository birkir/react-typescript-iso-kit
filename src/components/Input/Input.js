import React, { Component } from 'react';

class Input extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      value: this.props.value
    };
  }

  render() {
    return <input
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
    />;
  }
}

export default Input;