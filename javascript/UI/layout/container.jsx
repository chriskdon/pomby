/* global React, POM */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.layout) === 'undefined') UI.layout = {};

UI.layout.container = React.createClass({

    getInitialState: function() {
        return {
            title: "Loading...",
            user: {}
        };
    },

    componentDidMount: function() {
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

    render: function() {
        return <div id="page-main">
        <UI.common.header title={this.state.title} user={this.state.user} />
            <div id="body-container" className="container">



            </div>
        </div>;
    }
});
