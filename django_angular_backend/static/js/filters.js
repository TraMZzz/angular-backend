(function() {
    "use strict"
    angular
        .module('myApp')
        .filter('usa_phone', factoryUsa_phone);

            factoryUsa_phone.$inject = [];
            function factoryUsa_phone() {
                return function usaPhoneFilter(value) {
                    if (value == undefined) return value;
                    if (typeof value != 'string') value = value.toString();
                    if (/^\+?1[0-9]{10}$/.test(value)) value = "(USA) " + (value.charAt(0) != "+" ? "+" : "")+value;
                    return value;
                }
            };

})();
