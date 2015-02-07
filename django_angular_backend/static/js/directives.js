(function () {
"use strict";
    angular.module('myApp')
        .directive('lastContacts',lastContactsFunc );

        lastContactsFunc.$inject = [];
        function lastContactsFunc() {
            return {
                restrict : "EA",
                controller : "LastController",
                controllerAs : "vl",
                replace : true,
                scope : {
                    contacts : "=bind",
                    limit : "=limit"
                },
                templateUrl: '/static/partials/last-contact.html'
            }
        };
})();
