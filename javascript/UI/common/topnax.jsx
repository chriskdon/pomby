/* global React,_ */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.common) === 'undefined') UI.common = {};

UI.common.topnav = React.createClass({

    navItems: [
        {text: "Home",      link: "#"},
        {text: "Upload",    link: "#upload",    perm: "upload"},
        {text: "Inbox",     link: "#inbox",     perm: "inbox"},
        {text: "Projects",  link: "#projects"},
        {text: "Team",      link: "#team"},
        {text: "Admin",     link: "#admin",     perm: "admin"}
    ],

    render: function() {

        var self = this;

        return (
            <ul id="topnav">
                { this.navItems.map(function(m){
                    var style = '';
                    if(self.props.navigation === m.link)
                        style = 'active';

                    if(!m.perm || _.contains(self.props.user.perm, m.perm))
                        return <li><a href={m.link} className={style}>{m.text}</a></li>;
                }) }
            </ul>
        );
    }
});
