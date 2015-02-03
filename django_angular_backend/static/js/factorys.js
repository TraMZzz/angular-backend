(function() {
    "use strict"
    angular
        .module('myApp')
        .factory('Contacts', factoryContacts)


            factoryContacts.$inject = ['$resource'];
            function factoryContacts($resource) {
                return $resource(
                    "/api/v1/contact/:id", {id: "@id" },
                    {
                        "query": {method: 'GET'}
                    }
                );
            };

})();
