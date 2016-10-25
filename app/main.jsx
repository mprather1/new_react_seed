var React = require("react");
var ReactDOM = require('react-dom');

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

var User = Backbone.Model.extend({
  urlRoot: "http://localhost:8000/api/users"
});

var Users = Backbone.Collection.extend({
  url: "http://localhost:8000/api/users"
})

var users = new Users;
users.fetch()

var Hello = React.createClass({
  initialize: function(){
    console.log(users)
  },
  render: function(){
    return (<h1>Hello</h1>)
  }
})

ReactDOM.render(<Hello />, document.getElementById('main'));