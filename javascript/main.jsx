/* global React */
if (typeof(POM) === 'undefined') var POM = {};

document.addEventListener("DOMContentLoaded", function() {

    React.render(<UI.layout.container name="Mike" />, document.getElementById('body'));

});
