/*global describe, it, expect*/

import React from 'react/addons';
import Contact from '../../components/Home/Contact';

describe('Contact Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const contact = TestUtils.renderIntoDocument(
         <Contact/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(contact, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("Contact?");
  });
});
