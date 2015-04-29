if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.layout) === 'undefined') UI.layout = {};

UI.layout.container = React.createClass({
  render: function() {
    return <div>Hello {this.props.name} container</div>;
  }
});
