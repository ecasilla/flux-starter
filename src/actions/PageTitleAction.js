import Dispatcher from '../core/Dispatcher';
import {ActionTypes} from '../core/Constants';

export default {

  setTitle(title) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.PAGE_TITLE,
      title: title
    });
  }
};

