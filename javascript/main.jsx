/* global React, UI, io */
if (typeof(POM) === 'undefined') var POM = {};

document.addEventListener("DOMContentLoaded", function() {

    React.render(<UI.layout.container />, document.getElementById('body'));

    var socket = io();

});
