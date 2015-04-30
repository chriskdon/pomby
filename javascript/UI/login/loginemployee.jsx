/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.loginemployee = React.createClass({


    render: function() {
        return (
            <div id="employee-login">
                <a href="/auth/google" className="btn btn-primary">Sign in using Google</a>
            </div>
        )
    }

});
