(function() {
    "use strict"
    angular
        .module('myApp', ['ngRoute', 'ngResource', 'toastr', 'ui.bootstrap', 'ui.mask'])
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
                .when('/contacts/:contactId', {
                    templateUrl: '/static/partials/contact-info.html',
                    controller: 'ContactInfoController',
                    controllerAs: "vi"
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();
