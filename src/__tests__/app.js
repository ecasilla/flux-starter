/*global describe, it, expect*/

import React from 'react/addons';
import Application from '../App';

describe('Application', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const application = TestUtils.renderIntoDocument(
         <Application/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(application, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('Hello World!');
  });
});
