import 'babel/polyfill';
import React from 'react';
import {RouteHandler} from 'react-router';
import FastClick from 'fastclick';
import debug from 'debug';
import BaseComponent from 'components/BaseComponent';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import PageTitleStore from 'stores/PageTitleStore';
import PageActions from 'actions/PageTitleAction';

require('./assets/styles/sass/app.scss');

export default class App extends BaseComponent {
  constructor (props) {
    super(props);
    window.document.title = this.getTitle();
    this._bind('onChange');
  }

  componentDidMount() {
    debug('dev')('componentDidMount App');
    PageTitleStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    debug('dev')('componentWillUnmount App');
    PageTitleStore.removeChangeListener(this.onChange);
  }

  getTitle() { 
    return PageTitleStore.get_title();
  }
  onChange(){
    debug('dev')('App is changing title');
    window.document.title = this.getTitle();
  }
  render () {
    return (
      <RouteHandler/>
    );
  }
}

let onSetMeta = (name, content) => {
  // Remove and create a new <meta /> tag in order to make it work
  // with bookmarks in Safari
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element) => {
    if (element.getAttribute('name') === name) {
      element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

App.contextTypes = {
  onSetMeta
};

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(debug('dev')('APP READY'));
