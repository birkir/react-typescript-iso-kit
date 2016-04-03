import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * App container component
 */
class App extends Component {

  /**
   * Render Method
   * @return {Component}
   */
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          -
          <Link to="/about">About</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
