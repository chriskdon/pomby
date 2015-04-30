/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.layout) === 'undefined') UI.layout = {};

UI.layout.login = React.createClass({

    getInitialState: function() {
        return {title: "Loading..."};
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
    },

    render: function() {
        return <div id="page-login">
            <UI.common.loginheader title={this.state.title} />
            <div id="body-container" className="container">

                <div id="login-container" className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <div id="login-block" className="row">
                            <UI.login.tabs />
                            <UI.login.peoplesearch />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }

});
