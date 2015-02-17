var React = require('react');

var Comment = React.createClass({
  render: function() {
    var rawMarkup = this.props.children.toString();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

module.exports = Comment;