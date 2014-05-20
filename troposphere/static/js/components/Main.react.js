/** @jsx React.DOM */

define(function (require) {

    var React = require('react');
    var Header = require('./Header.react');
    var Sidebar = require('./Sidebar.react');
    var Footer = require('./Footer.react');
    var Notifications = require('./Notifications.react');

    return React.createClass({

      getInitialState: function () {
        return {
          loggedIn: this.props.session.isValid()
        };
      },

      render: function () {
        return (
          <div>
            <Header profile={this.props.profile}/>
            <Sidebar loggedIn={this.state.loggedIn}
                     currentRoute={this.props.route}
            />
            <Notifications/>
            <div id='main'>
              {this.props.content}
            </div>
            <Footer/>
          </div>
        );
      }

    });

  });
