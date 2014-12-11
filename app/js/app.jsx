/** @jsx React.DOM */
'use strict';

window.$ = require('jquery');
window._ = require('lodash');
var React = require('react');
//all react to dev tools to work
window.React = React;

var Avatar = React.createClass({
  render: function() {
    return (
      <div className="avatar">{this.props.name}</div>
    )
  }
});

React.render(<Avatar name="jacob"/>, document.getElementById('mount-point'));

console.log('font-end app initialized');

