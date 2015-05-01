/* global React, POM */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.tabs = React.createClass({


    tabClass: "col-xs-6 login-tab",

    handleTab1Click: function(e) {
        POM.addClass(e.target, 'active');
        POM.removeClass(this.refs.tab2.getDOMNode(), 'active');
        POM.removeClass(this.refs.tab1content.getDOMNode(), "hidden");
    },

    handleTab2Click: function(e) {
        POM.addClass(e.target, 'active');
        POM.removeClass(this.refs.tab1.getDOMNode(), 'active');
        POM.addClass(this.refs.tab1content.getDOMNode(), "hidden");
    },

    render: function() {
        return (
            <div className="col-xs-6">
                <div className="row">
                    <div className={this.tabClass + " active"} ref="tab1" onClick={this.handleTab1Click}>Employee Login</div>
                    <div className={this.tabClass} ref="tab2" onClick={this.handleTab2Click}>Client Login</div>
                </div>
                <UI.login.loginemployee ref="tab1content" />
            </div>
        )
    }

});
