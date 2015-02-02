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
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();
