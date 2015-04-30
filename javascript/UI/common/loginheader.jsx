/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.common) === 'undefined') UI.common = {};

UI.common.loginheader = React.createClass({
  render: function() {
    return  <div id="login-header">
                <div className="col-xs-12">
                    <div className="row"><h1>{this.props.title}</h1></div>
                </div>
            </div>
  }
});
