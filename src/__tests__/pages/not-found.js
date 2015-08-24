/*global describe, it, expect*/
import React from 'react/addons';

import NotFound from '../../components/Pages/not-found';

describe('NotFoundPage', () => {

  let instance;
  const TestUtils = React.addons.TestUtils;

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(<NotFound />);
  });

  afterEach(() => {
    if (instance) {
      React.unmountComponentAtNode(React.findDOMNode(instance));
    }
  });

  it('should render correctly', () => {
    const title = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1');
    const node = React.findDOMNode(title);
    expect(node.textContent).to.equal("404");
  });

});
