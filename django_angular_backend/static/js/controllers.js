(function() {
    "use strict"
    angular
        .module('myApp')
        .controller("HomeController", HomeControllerFunc)
        .controller("ContactsController", ContactsControllerFunc)
        .controller("ContactInfoController", ContactInfoControllerFunc);

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

        ContactsControllerFunc.$inject = ['Contacts'];
        function ContactsControllerFunc(Contacts) {
            var vc = this;
            Contacts.query().$promise.then(function(d) {
                vc.contacts = d.objects;
            });
        };

        ContactInfoControllerFunc.$inject = ['$routeParams', 'Contacts', 'toastr'];
        function ContactInfoControllerFunc($routeParams, Contacts, toastr) {
            var vi = this;
            var Id = $routeParams.contactId

            Contacts.get({id : Id}, {}).$promise.then(function(d) {
                vi.contact = d
                toastr.success('Success!', 'Get Contact!');
            }).catch(function(response) {
                toastr.error('Error!', response.status);
            });
            vi.submit = function() {
                vi.contact.$update().then(function(d) {
                    toastr.success('Success!', 'Save Contact!');
                }).catch(function(response) {
                    toastr.error('Error!', response.status);
                });
            }
        };

})();
