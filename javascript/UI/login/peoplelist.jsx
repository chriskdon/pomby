/* global React */
if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.login) === 'undefined') UI.login = {};

UI.login.peoplelist = React.createClass({

    render: function() {

        var peopleNodes = this.props.data.map(function (person) {
            return (
                <li>
                    <a href={"/inbox/" + person.email}>
                        <img src={person.picture} />
                        {person.name}
                    </a>
                </li>
            );
        });

        return (
            <ul id="people-list-small">
                {peopleNodes}
            </ul>
        )
    }

});
