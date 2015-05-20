import KeyMirror from 'react/lib/keyMirror';

export default {

  PayloadSources:KeyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: KeyMirror({
    CHANGE_EVENT:null,
    //Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null
  })
};
