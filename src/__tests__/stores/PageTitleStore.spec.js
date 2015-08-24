import CONSTANTS from '../../core/Constants';
import sinon from 'sinon';

describe('PageTitleStore: ', () => {
  let store;
  let sandbox;
  beforeEach(() => {
    store = require('../../stores/PageTitleStore.js');
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    store = null;
    sandbox = sinon.sandbox.restore();
  });
  it('should be defined', () => {
    expect(store).to.be.an('object');
  });
});
