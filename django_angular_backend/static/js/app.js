(function() {
    "use strict"
    angular
        .module('myApp', ['ngRoute', 'ngResource'])
        .config(['$interpolateProvider', '$routeProvider',
            function($interpolateProvider, $routeProvider) {
                $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
                $routeProvider
                .when('/', {
                    templateUrl: '/static/partials/my-info.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/contacts', {
                templateUrl: '/static/partials/contacts.html',
                controller: 'ContactsController',
                controllerAs: 'vc'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();
