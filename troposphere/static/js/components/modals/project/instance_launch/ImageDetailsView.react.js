/** @jsx React.DOM */

define(
  [
    'react',
    'backbone'
  ],
  function (React, Backbone) {

    return React.createClass({

      //
      // Mounting & State
      // ----------------
      //

      propTypes: {
        image: React.PropTypes.instanceOf(Backbone.Model).isRequired,
        onPrevious: React.PropTypes.func.isRequired,
        onNext: React.PropTypes.func.isRequired
      },

      //
      // Callbacks
      //

      onBack: function(){
        this.props.onPrevious(this.props.image);
      },

      onConfigure: function(){
        this.props.onNext(this.props.image);
      },

      //
      // Render
      // ------
      //

      renderTag: function(tagName){
        return (
          <li>{tagName}</li>
        )
      },

      renderTags: function(image){
        return (
          <ul className="tags">{image.get('tags').map(this.renderTag)}</ul>
        )
      },

      renderBody: function(image){
        return (
          <div className="image-details">
            <div className="name">{image.get('name')}</div>
            <div className="description">{image.get('description')}</div>
            {this.renderTags(image)}
          </div>
        )
      },

      render: function () {
        var image = this.props.image;

        return (
          <div>
            <div className="modal-body">
              {this.renderBody(image)}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default cancel-button" onClick={this.onBack}>
                Back
              </button>
              <button type="button" className="btn btn-primary cancel-button" onClick={this.onConfigure}>
                Configure
              </button>
            </div>
          </div>
        );
      }

    });

  });
