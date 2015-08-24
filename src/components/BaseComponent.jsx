import React from 'react';
import _ from 'lodash';

/**
* description This base Component is just a wrapper for a react component
* it has has a custom function that allow you to in your custom component to
* bind all this references to React. This is because the es6 syntax doesn't
* do the magical bind as the react.creatClass method so we must manually bind
*/
export default class BaseComponent extends React.Component {
  _bind(...methods) {
    _.each(methods, (method) => this[method] = this[method].bind(this) );
  }
}
