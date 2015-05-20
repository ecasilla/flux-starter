import React from 'react';
import Router from './stores/RouteStore.react.jsx';
Router.getRouter();
window.React = React;

Router.run(function (Handler, state) {
  React.render(<Handler/>, document.getElementById('root'));
});
