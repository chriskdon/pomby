/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.page) === 'undefined') UI.page = {};

UI.page.inbox = {
    register: function(){
        console.info('[UI.page.inbox] register route');
        POM.router.rr.add([{ path: "/inbox", handler: UI.page.inbox.render }]);
    },

    render: function(container, params){
        console.info('[UI.page.inbox] rendering page');
        React.render(<UI.page.inbox.element />, container);
    },

    element: React.createClass({
        render: function() {
            return (
                <div>Inbox</div>
            );
        }
    })
};
