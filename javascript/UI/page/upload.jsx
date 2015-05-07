/* global React */

if (typeof(UI) === 'undefined') var UI = {};

if (typeof(UI.page) === 'undefined') UI.page = {};

UI.page.upload = {
    register: function(){
        console.info('[UI.page.upload] register route');
        POM.router.rr.add([{ path: "/upload", handler: UI.page.upload.render }]);
    },

    render: function(container, params){
        console.info('[UI.page.upload] rendering page');
        React.render(<UI.page.upload.element />, container);
    },

    element: React.createClass({
        render: function() {
            return (
                <div>Upload</div>
            );
        }
    })
};
