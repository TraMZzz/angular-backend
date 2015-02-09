(function() {
    "use strict"
    angular
        .module('myApp')
        .factory('Contacts', factoryContacts);

            factoryContacts.$inject = ['$resource'];
            function factoryContacts($resource) {
                var Contacts = $resource('/api/v1/contact/:id', {id : "@id"},
                    {
                        'query': {method:'GET'},
                        'update' : {method : 'PUT'}
                    }
                );
                Contacts.prototype.isBirthdayToday = function () {
                    if (!this.birth_date) return false;
                        var cD = parseISODate(this.birth_date);
                        var now = new Date();
                        return cD.getDate() == now.getDate() && cD.getMonth() == now.getMonth();
                }
                return Contacts;
            };

            parseISODate.re = /^([0-9]{4})-?([0-9]{2})-?([0-9]{2})(T([0-9]{1,2}):?([0-9]{1,2}):?([0-9]{1,2})(\.([0-9]){3}Z?)?)?$/i;
            function parseISODate(aStr) {
                var date;
                if (!aStr) return aStr;
                if (aStr instanceof Date) date = aStr;
                else date = new Date(aStr);
                if (date.getHours() == 0 && date.getMinutes() == 0 && date.getSeconds() == 0) {
                    date.setMinutes(-date.getTimezoneOffset())
                }
                return date;
            }

})();
