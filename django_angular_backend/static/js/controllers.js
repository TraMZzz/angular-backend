(function() {
    "use strict"
    angular
        .module('myApp')
        .controller("HomeController", HomeControllerFunc)
        .controller("ContactsController", ContactsControllerFunc)
        .controller("ContactInfoController", ContactInfoControllerFunc)
        .controller("LastController", LastControllerFunc);

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

        ContactsControllerFunc.$inject = ['Contacts', '$filter'];
        function ContactsControllerFunc(Contacts, $filter) {
            var vc = this;
            vc.orderByField = 'first_name';
            vc.currentPage = 1;
            vc.pageSize = 3;
            vc.filteredContacts = [];
            Contacts.query().$promise.then(function(d) {
                vc.contacts = d.objects;
                vc.totalItems = vc.contacts.length

                vc.getPage = function(){
                    var begin = ((vc.currentPage - 1) * vc.pageSize);
                    var end = begin + vc.pageSize;
                    vc.filteredContacts = $filter('filter')(vc.contacts, vc.searchText);
                    vc.totalItems = vc.filteredContacts.length;
                    vc.filteredContacts = vc.filteredContacts.slice(begin, end);
                  };

                vc.getPage();
                vc.pageChanged = function() {
                    vc.getPage(); 
                };
            });
        };

        ContactInfoControllerFunc.$inject = ['$routeParams', 'Contacts', 'toastr'];
        function ContactInfoControllerFunc($routeParams, Contacts, toastr) {
            var vi = this;
            var Id = $routeParams.contactId

            Contacts.query({id : Id}, {}).$promise.then(function(d) {
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
            vi.dateOptions = {maxDate:0
                            ,dateFormat: 'yy-mm-dd'
                            ,yearRange : "c-50:+0"
                            ,changeYear: true 
                            ,changeMonth: true}
        };

        LastControllerFunc.$inject = ['$scope', 'Contacts'];
        function LastControllerFunc($scope, Contacts) {
            var vl = this;
            vl.contacts = $scope.contacts;
            vl.limit = $scope.limit || 5;
            vl.orderBy = "-date_created";
            vl.limitFunc = function (v, i) {
                return (i < vl.limit);
            };
            Contacts.query().$promise.then(function(d) {
                vl.contacts = $scope.contacts || d.objects;
            });
        };

})();
