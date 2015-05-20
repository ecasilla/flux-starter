import { Dispatcher } from 'flux';
import {PayloadSources}  from './constants';
import assign from 'object-assign';

let AppDispatcher = assign(new Dispatcher(),{

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});


export default AppDispatcher();
