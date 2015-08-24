import keyMirror from 'react/lib/keyMirror';

export default {

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: keyMirror({
    CHANGE_EVENT:null,
    PAGE_TITLE:null,
    //Session
    LOGIN: null,
    SIGNUP: null,
    LOGOUT:null
  }),
  API:{
    BASE_URL:''
  }
};
