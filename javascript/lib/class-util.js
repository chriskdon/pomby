if (typeof(POM) === 'undefined') var POM = {};

POM.hasClass = function(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

POM.addClass = function(ele, cls) {
    if (!POM.hasClass(ele, cls)) ele.className += " " + cls;
}

POM.removeClass = function(ele, cls) {
    if (POM.hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
