/* global React, POM */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.layout) === 'undefined') UI.layout = {};

UI.layout.container = React.createClass({

    _eventHashchange: null,

    getInitialState: function() {
        return {
            title: "Loading...",
            navigation: "#",
            user: {}
        };
    },

    urlDidChange: function(loc){
        if(loc.charAt(0) === '#') loc = loc.substr(1);
        var body = document.getElementById('body-container');
        var route = POM.router.rr.recognize(loc);

        if(route){
            console.info("[UI.layout.container] New route found", loc, route);
            route[0].handler(body, route[0].params);
        }else{
            console.error("[UI.layout.container] No route found", loc);
        }
    },

    componentDidMount: function() {
        // Subscribe to events
        this._eventHashchange = POM.events.subscribe("hashchange", this.urlDidChange);
        this.urlDidChange(window.location.hash);

        // Load up user data for header
        var self = this;

        POM.data.site.info()
            .then(function(res){
                self.setState({title: res.name});

                // Layout render so set site title
                // TODO: move to common function
                window.document.title = res.name;
            })
            .catch(function(e, url){
                console.log("Error downloading content", e, url);
            });

        POM.data.user.info()
            .then(function(res){
                self.setState({user: res});
            })
            .catch(function(e, url){
                console.log("Error downloading content", e, url);
            });
    },

    componentWillUnmount: function(){
        this._eventHashchange.remove();
    },

    render: function() {
        return (
        <div id="page-main">
        <UI.common.header title={this.state.title} user={this.state.user} navigation={this.state.navigation} />
            <div id="body-container" className="container">

            </div>
        </div>);
    }
});
