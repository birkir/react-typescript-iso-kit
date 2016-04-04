import * as React from 'react';
import Button from '../components/Button/Button';

class About extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>I'm about super foos!</p>
        <Button>Hi there</Button>
      </div>
    );
  }
}

export default About;