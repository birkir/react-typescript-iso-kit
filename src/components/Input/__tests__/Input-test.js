'use strict';

jest.unmock('../Input.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Input from '../Input';

describe('Input', () => {

  const input = TestUtils.renderIntoDocument(
    <Input value="test" />
  );

	const inputNode = ReactDOM.findDOMNode(input);

  it('renders input', () => {
    expect(inputNode).not.toBeNull();
  });
});
