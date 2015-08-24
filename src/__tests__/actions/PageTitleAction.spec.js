import sinon from 'sinon';
import Dispatcher from '../../core/Dispatcher';
import {ActionTypes} from '../../core/Constants';

describe('PageTitleAction: ', () => {
  let PageTitleAction;
  let sandbox;
  beforeEach(() => {
    PageTitleAction = require('../../actions/PageTitleAction.js');
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    PageTitleAction = null;
    sandbox = sinon.sandbox.restore();
  });

  it('should be defined', () => {
    expect(PageTitleAction).to.be.an('object');
  });
  it('should have a setTitle method',() =>{
   expect(PageTitleAction.setTitle).to.be.an('function');
  });
  it('should dispatch a setTitle event', () =>{
   var DispatchStub = sandbox.stub(Dispatcher,'handleViewAction');
    PageTitleAction.setTitle('hello');
    expect(DispatchStub.getCall(0).args[0]).to.be.an('object');
    expect(DispatchStub.getCall(0).args[0].title).to.be.equal('hello');
    expect(DispatchStub.getCall(0).args[0].actionType).to.be.equal(ActionTypes.PAGE_TITLE);
  });
});
