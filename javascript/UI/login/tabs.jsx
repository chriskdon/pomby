/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.tabs = React.createClass({

    handleTab1Click: function(e) {
        $(e.target).addClass('active');
        $(this.refs.tab2.getDOMNode()).removeClass('active');
        $(this.refs.tab1content.getDOMNode()).removeClass('hidden');
    },

    handleTab2Click: function(e) {
        $(e.target).addClass('active');
        $(this.refs.tab1.getDOMNode()).removeClass('active');
        $(this.refs.tab1content.getDOMNode()).addClass('hidden');
    },

    render: function() {
        return (
            <div className="col-xs-6">
                <div className="row">
                    <div className="col-xs-6 login-tab active" ref="tab1" onClick={this.handleTab1Click}>Employee Login</div>
                    <div className="col-xs-6 login-tab" ref="tab2" onClick={this.handleTab2Click}>Client Login</div>
                </div>
                <UI.login.loginemployee ref="tab1content" />
            </div>
        )
    }

});
