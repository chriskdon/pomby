/* global React, _, POM */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.peoplesearch = React.createClass({

    getInitialState: function() {
        return {allpeople: [], people: []};
    },

    componentDidMount: function() {
        var self = this;
        POM.data.people.team()
            .then(function(res){
                self.setState({allpeople: res.data, people: res.data});
            })
            .catch(function(e, url){
                console.log("Error downloading people", e, url);
            });
    },

    handleSearch: function() {
        var searchStr = React.findDOMNode(this.refs.search).value.toLowerCase().trim();

        this.setState({
            people: _.filter(this.state.allpeople, function(person){
                return person.name.toLowerCase().indexOf(searchStr) >= 0 || person.email.toLowerCase().indexOf(searchStr) >= 0 || searchStr === ''
            })
        });
    },

    render: function() {
        return <div id="login-search" className="col-xs-6">
            <div className="form-group">
                <input id="inbox-search" type="text" placeholder="Search Name" className="form-control" ref="search" onKeyUp={this.handleSearch} />
            </div>
            <div id="login-people-list">
                <UI.login.peoplelist data={this.state.people} />
            </div>
        </div>
    }

});
