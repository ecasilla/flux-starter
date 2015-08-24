import debug from 'debug';
import BaseStore from './BaseStore';
import {ActionTypes} from '../core/Constants';

class PageTitleStore extends BaseStore{
  constructor() {
    super();
    debug('dev')('PageTitleStore init');
    this.subscribe(() => this._registerToActions.bind(this));
    this.title = '';
  }

  get_title(){
    return this.title;
  }

  _registerToActions(payload) {
    switch(payload.action.actionType) {
    case 'PAGE_TITLE':
      this.title = payload.action.title;
      this.emitChange();
      break;
    default:
      debug('dev')('PageTitleStore default');
      break;
    }
  }
}

export default new PageTitleStore();

