/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.layout) === 'undefined') UI.layout = {};

UI.layout.login = React.createClass({
  render: function() {
    return  <div id="page-login">
                <UI.common.loginheader />
                <div id="bodycontainer" className="container">

                    <div className="row">
                        Hello {this.props.name}
                    </div>

                </div>
            </div>
  }
});
