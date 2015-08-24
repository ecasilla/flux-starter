/*global describe, it, expect*/

import React from 'react/addons';
import About from '../../components/Home/About';

describe('About Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const about = TestUtils.renderIntoDocument(
         <About/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(about, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("About?");
  });
});
