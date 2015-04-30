/* global qwest */
if (typeof(POM) === 'undefined') var POM = {};
if (typeof(POM.data) === 'undefined') POM.data = {};

POM.data.site = {

    info: function(){
        return qwest.get('/info');
    }

}
