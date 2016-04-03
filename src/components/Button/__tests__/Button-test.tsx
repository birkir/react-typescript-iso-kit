'use strict';

jest.unmock('../Button.tsx');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import Button from '../Button.tsx';

describe('Button', () => {

  const button = TestUtils.renderIntoDocument(
    <Button>foo</Button>
  );

  const buttonNode = ReactDOM.findDOMNode(button);

  it('renders button', () => {
    expect(buttonNode).not.toBeNull();
  });

  it('should print correct text', () => {
    expect(buttonNode.textContent).toBe('foo');
  });
});
