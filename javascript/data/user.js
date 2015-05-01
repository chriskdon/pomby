/* global qwest */
if (typeof(POM) === 'undefined') var POM = {};
if (typeof(POM.data) === 'undefined') POM.data = {};

POM.data.user = {

    info: function(){
        return qwest.get('/user');
    }

}
