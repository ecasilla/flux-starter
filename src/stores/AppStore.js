import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import { ActionTypes } from '../core/Constants.js';
import assign from 'object-assign';

var AppStore = assign({}, EventEmitter.prototype, {

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(ActionTypes.CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  onChange(callback) {
    this.on(ActionTypes.CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  off(callback) {
    this.off(ActionTypes.CHANGE_EVENT, callback);
  }

});

AppStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {
    default:
      // Do nothing
  }
});

export default AppStore;
