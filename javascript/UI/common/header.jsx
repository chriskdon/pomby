/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.common) === 'undefined') UI.common = {};

UI.common.header = React.createClass({

    render: function() {
        return (
            <div id="header">
                <div className="col-xs-3 col-md-2">
                    <div className="row"><h1>{this.props.title}</h1></div>
                </div>
                <div className="nav-hamburger pull-right"><i className="fa fa-bars"></i></div>
                <div className="col-md-7 col-xs-12">
                    <UI.common.topnav user={this.props.user} navigation={this.props.navigation} />
                </div>
            </div>
        );
    }

});
