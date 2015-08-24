import { Dispatcher } from 'flux';
import {PayloadSources}  from './Constants';
import assign from 'object-assign';
import debug from 'debug';

let AppDispatcher = assign(new Dispatcher(),{

  handleServerAction: function(action) {
    debug('dev')('Handle Server Action: ', action);
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    debug('dev')('Handle View Action: ', action);
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

export default AppDispatcher;
