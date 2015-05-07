/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.page) === 'undefined') UI.page = {};

UI.page.home = {
    register: function(){
        console.info('[UI.page.home] register route');
        POM.router.rr.add([{ path: "", handler: UI.page.home.render }]);
    },

    render: function(container, params){
        console.info('[UI.page.home] rendering page');
        React.render(<UI.page.home.element />, container);
    },

    element: React.createClass({
        render: function() {
            return (
                <div>
                    <UI.common.dropzone />
                    <h2>Timeline</h2>
                </div>
            );
        }
    })
};
