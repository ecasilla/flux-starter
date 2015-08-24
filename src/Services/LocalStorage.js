import debug from 'debug';

const LocalStorage = {

  save (key, data) {
    debug('dev')('Local Storage saving: ',key);
    window.localStorage.setItem(key, JSON.stringify(data));
  },

  destroy (key) {
    debug('dev')('Local Storage removing: ',key);
    window.localStorage.removeItem(key);
  },

  get (key) {
    debug('dev')('Local Storage getting: ',key);
    var data = window.localStorage.getItem(key);
    if(data !== undefined && data !== null) {
      return JSON.parse(data);
    }

    return null;
  }

};

export default LocalStorage;
