/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.common) === 'undefined') UI.common = {};

UI.common.header = React.createClass({

    navItems: [
        {text: "Home",      link: "#"},
        {text: "Upload",    link: "#upload",    perm: "upload"},
        {text: "Inbox",     link: "inbox",      perm: "inbox"},
        {text: "Projects",  link: "#projects"},
        {text: "Team",      link: "#team"},
        {text: "Admin",     link: "#admin",     perm: "admin"}
    ],

    render: function() {

        // determine which nav items the user has access to

        return (
            <div id="header">
                <div className="col-xs-3 col-md-2">
                    <div className="row"><h1>{this.props.title}</h1></div>
                </div>
                <div className="nav-hamburger pull-right"><i className="fa fa-bars"></i></div>
                <div className="col-md-7 col-xs-12">
                    <ul id="topnav">
                        <li><a id="nav-home" href="#" className="active">Home</a></li>
                        <li><a id="nav-upload" href="#upload">Upload</a></li>
                        <li><a id="nav-inbox" href="#inbox">Inbox<span id="inboxcount"></span></a></li>
                        <li><a id="nav-projects" href="#projects">Projects</a></li>
                        <li><a id="nav-team" href="#team">Team</a></li>
                        <li><a id="nav-admin" href="#admin">Admin</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
