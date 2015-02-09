describe('ContactsController filter', function() {

    beforeEach(function () {
        module('ngRoute');
        module('ngResource');
        module('toastr');
        module('ui.bootstrap');
        module('ui.mask');
        module('ui.date');
        module('myApp');
    });

    var $httpBackend, $rootScope, $controller, $filter, $scope, vc;

    beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$controller_, _$filter_, Contacts){
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $filter = _$filter_;
        $scope = $scope || $rootScope.$new({});
        $httpBackend.when('GET', '/api/v1/contact').respond(someContacts());
        vc = $controller('ContactsController', { $scope : $scope });
        vc.searchText = '';
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
        });
        $httpBackend.flush();
    }));

    describe('assigning ContactsController', function() {

        it ('should allow Pagination', function () {
            expect(vc.pageSize).toBe(3);
        });
      
        it ('should have correct number of pages', function() {
            expect(vc.orderByField).toBe('first_name');
        });
        
        it ('should define Active Page as 1', function () {
            expect(vc.currentPage).toBe(1);
        });

        it ('should define totalItem', function () {
            expect(vc.totalItems).toBe(vc.contacts.length);
        });

        it ('should define filteredContacts', function () {
            expect(vc.filteredContacts.length).toBe(vc.pageSize);
        });

        it ('should first_name Robert', function () {
            expect(vc.filteredContacts[0].first_name).toBe('Robert');
        });

        it ('should first_name Paul', function () {
            vc.currentPage = 2;
            vc.getPage();
            expect(vc.filteredContacts[0].first_name).toBe('Paul');
        });

        it ('should searchText Michael', function () {
            vc.searchText = 'Michael'
            vc.getPage();
            expect(vc.filteredContacts.length).toBe(1);
            expect(vc.filteredContacts[0].first_name).toBe('Michael');
        });

        it ('should searchText Pa', function () {
            vc.searchText = 'Pa'
            vc.getPage();
            expect(vc.filteredContacts.length).toBe(3);
            expect(vc.filteredContacts[0].first_name).toBe('Paul');
            expect(vc.filteredContacts[1].first_name).toBe('Nate');
            expect(vc.filteredContacts[1].last_name).toBe('Parker');
            expect(vc.filteredContacts[2].first_name).toBe('Paul');
        });

    });
  
 /*   */
    function someContacts(someOne) {
        var Data = someContacts.Data;
        if (typeof someOne == 'number') {
            return Data.objects[someOne % Data.objects.length];
        } else {
            return Data;
        }
    }
    someContacts.Data = {
        "meta": {
            "limit": 1000,
            "next": null,
            "offset": 0,
            "previous": null,
            "total_count": 13
        },
        "objects": [{
            "id": 1,
            "first_name": "Robert",
            "last_name": "Abbott",
            "birth_date": "1933-03-02",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "robertabbot@gmail.com",
            "date_created": "2014-05-24T09:27:44.306Z",
            "id": "1"
        }, {
            "id": 2,
            "first_name": "Bruce",
            "last_name": "Ableson",
            "birth_date": "1963-09-23",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:28:20.149Z",
            "id": "2"
        }, {
            "id": 3,
            "first_name": "Leonard",
            "last_name": "Adleman",
            "birth_date": "1945-12-31",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:28:54.875Z",
            "id": "3"
        }, {
            "id": 4,
            "first_name": "Paul",
            "last_name": "Allen",
            "birth_date": "1976-07-21",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:30:13.729Z",
            "id": "4"
        }, {
            "id": 5,
            "first_name": "Daniel",
            "last_name": "Kottke",
            "birth_date": "1953-04-01",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "dankottke@gmail.com",
            "date_created": "2014-05-24T09:30:56.328Z",
            "id": "5"
        }, {
            "id": 6,
            "first_name": "Matthew",
            "last_name": "Haughey",
            "birth_date": "1972-10-10",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:31:31.847Z",
            "id": "6"
        }, {
            "id": 7,
            "first_name": "Michael",
            "last_name": "Hawley",
            "birth_date": "1961-11-02",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:31:56.859Z",
            "id": "7"
        }, {
            "id": 8,
            "first_name": "Nate",
            "last_name": "Parker",
            "birth_date": "1979-11-28",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "+17401390420",
            "email": "nateparker@gmail.com",
            "date_created": "2014-05-24T09:33:05.560Z",
            "id": "8"
        }, {
            "id": 9,
            "first_name": "Paul",
            "last_name": "Irish",
            "birth_date": "1982-05-12",
            "__v": 0,
            "jabber_id": "paul@jgoogl.com",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:33:57.253Z",
            "id": "9"
        }, {
            "id": 10,
            "first_name": "Jack",
            "last_name": "Dorsey",
            "birth_date": "1976-11-19",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "",
            "date_created": "2014-05-24T09:34:35.618Z",
            "id": "10"
        }, {
            "id": 11,
            "first_name": "Kelley",
            "last_name": "Deal",
            "birth_date": "1961-06-12",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "+16502530000",
            "email": "",
            "date_created": "2014-05-24T09:35:29.234Z",
            "id": "11"
        }, {
            "id": 12,
            "first_name": "Russ",
            "last_name": "Nelson",
            "birth_date": "1958-03-24",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "",
            "email": "russ@nelson.com",
            "date_created": "2014-05-24T09:36:27.626Z",
            "id": "12"
        }, {
            "id": 13,
            "first_name": "Tim",
            "last_name": "Paterson",
            "birth_date": "1956-08-04",
            "__v": 0,
            "jabber_id": "",
            "cellphone_number": "",
            "phone_number": "+17501110000",
            "email": "",
            "date_created": "2014-05-24T09:37:01.722Z",
            "id": "13"
        }]
    }})
