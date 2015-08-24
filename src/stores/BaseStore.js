import EventEmitter from 'eventemitter3';
import debug from 'debug';
import Dispatcher from '../core/Dispatcher';
import { ActionTypes } from '../core/Constants.js';

export default class BaseStore extends EventEmitter {

  constructor() {
    super();
    debug('dev')("Base Store Init");
  }

  subscribe(actionSubscribe) {
  debug('dev')("Base Store subscribe",actionSubscribe);
    this._dispatchToken = Dispatcher.register(actionSubscribe());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    debug('dev')("Base Store change");
    this.emit(ActionTypes.CHANGE);
  }

  addChangeListener(cb) {
    debug('dev')("Adding change listener",cb.toString());
    this.on(ActionTypes.CHANGE, cb)
  }

  removeChangeListener(cb) {
    debug('dev')("Removing change listener",cb.toString());
    this.removeListener(ActionTypes.CHANGE, cb);
  }

}
