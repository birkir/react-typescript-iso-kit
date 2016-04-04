import * as React from 'react';
const s = require('./Button.less');

class Button extends React.Component<any, any> {
  render() {
    const type: string = this.props.type || 'button';
    return <button className={s.host} type={type}>{this.props.children}</button>;
  }
}

export default Button;