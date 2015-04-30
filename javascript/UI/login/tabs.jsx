/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.tabs = React.createClass({

    render: function() {
        return <div className="col-xs-6">Login Tabs</div>
    }

});
