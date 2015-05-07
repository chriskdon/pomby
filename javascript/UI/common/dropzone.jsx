/* global React */

if (typeof(UI) === 'undefined') var UI = {};
if (typeof(UI.common) === 'undefined') UI.common = {};

UI.common.dropzone = React.createClass({
    render: function() {
        return (
            <div className="dropzone">
                <div>Drag documents here to upload.</div>
            </div>
        );
    }
});
