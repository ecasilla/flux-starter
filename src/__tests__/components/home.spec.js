/*global describe, it, expect*/

import React from 'react/addons';
import Home from '../../components/Home/Home';

describe('Home Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const home = TestUtils.renderIntoDocument(
         <Home/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("Home?");
  });
});
