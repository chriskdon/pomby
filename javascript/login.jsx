document.addEventListener("DOMContentLoaded", function() {

    React.render(<UI.layout.login name="Mike" />, document.getElementById('body'));

    var socket = io();
});
