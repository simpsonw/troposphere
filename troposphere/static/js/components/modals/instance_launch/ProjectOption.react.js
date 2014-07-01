/** @jsx React.DOM */

define(
  [
    'react',
    'backbone'
  ],
  function (React, Backbone) {

    return React.createClass({

      propTypes: {
        project: React.PropTypes.instanceOf(Backbone.Model).isRequired
      },

      render: function () {
        return (
          <option value={this.props.project.id}>
            {this.props.project.get('name')}
          </option>
        );
      }
    });

  });
