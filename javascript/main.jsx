/* global React, UI, io */
if (typeof(POM) === 'undefined') var POM = {};

document.addEventListener("DOMContentLoaded", function() {

    // Initialize router
    console.groupCollapsed("Initializing router");
    POM.router.init();

    for(var page in UI.page){
        if(UI.page.hasOwnProperty(page) && UI.page[page].register){
            UI.page[page].register();
        }
    }
    console.groupEnd();

    console.groupCollapsed("Rendering initial layout");
    React.render(<UI.layout.container />, document.getElementById('body'));
    console.groupEnd();

    var socket = io();

    // Load up the hashchange event
    window.onhashchange = function(){
        var loc = window.location.hash;
        if(loc.charAt(0) === '#') loc = loc.substr(1);
        POM.events.publish("hashchange", loc);
    };

});
