/* global qwest */
if (typeof(POM) === 'undefined') var POM = {};
if (typeof(POM.data) === 'undefined') POM.data = {};

POM.data.people = {

    team: function(){
        return qwest.get('/people/team');
    }

}
