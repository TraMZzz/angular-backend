(function() {
    "use strict"
    angular
        .module('myApp')
        .controller("HomeController", HomeControllerFunc)

        HomeControllerFunc.$inject = [];
        function HomeControllerFunc() {
            var vm = this;
            vm.contact = {
                firstName : "Rostuslav",
                lastName :   "Steh",
                birthday : '1990-04-11T00:00:00.000Z',
                bio : "180cm",
                eMail : "steh44@gmail.com",
                jabber : "tramzzz@42cc.co",
                skype: "tramzzz",
                other : "..."
            };
        };

})();
