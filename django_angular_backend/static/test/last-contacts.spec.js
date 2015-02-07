describe('lastContacts', function() {

    beforeEach(function () {
        module('ngRoute');
        module('ngResource');
        module('toastr');
        module('ui.bootstrap');
        module('ui.mask');
        module('partials');
        module('myApp');
    });

    var $httpBackend, $compile, $rootScope, $scope, $controller, plugin, ctrl;

    describe('provides directive <last-contacts>', function() {

        beforeEach(inject(function(_$httpBackend_, _$compile_, _$rootScope_, _$controller_, Contacts){
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $scope = $rootScope.$new({});
            $httpBackend.when('GET', '/api/v1/contact').respond(someContacts());
            $scope.vl = {contacts : someContacts().objects};
            plugin = $compile('<last-contacts bind="vl.contacts" limit="5"></last-contacts>')($scope);
            $scope.$digest();
        }));

        it('should contains title "Last added contacts:"', function () {
            expect(plugin.html()).toContain("Last added contacts");
        });

        it ('should not containt <last-contacts> element after directive was compiled', function () {
            expect(plugin.html()).not.toContain('<list-contacts');
            expect(plugin.html()).not.toContain('</list-contacts>');
        });

        it('should contains one table', function () {
            var table = plugin.find("table");
            expect(table.length).toBe(1)
        });

        it('should have 5 rows', function () {
            var rows = plugin.find('tr');
            expect(rows.length).toBe(5);
        });

        it('should contain first <a> with text "Tim Paterson" and href="#/contacts/13"', function () {
            var a = plugin.find("a")[0];
            expect(a.innerHTML.replace(/  /g, ' ')).toBe("Tim Paterson");
            expect(a.href).toMatch(/^.*#\/contacts\/13$/i);
        });

        it('should contain on pos 2 <a> with text "Russ Nelson" and href="#/contacts/12"', function () {
            var a = plugin.find("a")[1];
            expect(a.innerHTML.replace(/  /g, ' ')).toBe("Russ Nelson");
            expect(a.href).toMatch(/^.*#\/contacts\/12$/i);
        });

        it('should contain on pos 3 <a> with text "Kelley Deal" and href="#/contacts/11"', function () {
            var a = plugin.find("a")[2];
            expect(a.innerHTML.replace(/  /g, ' ')).toBe("Kelley Deal");
            expect(a.href).toMatch(/^.*#\/contacts\/11$/i);
        });

        it('should contain on pos 4 <a> with text "Jack Dorsey" and href="#/contacts/10"', function () {
            var a = plugin.find("a")[3];
            expect(a.innerHTML.replace(/  /g, ' ')).toBe("Jack Dorsey");
            expect(a.href).toMatch(/^.*#\/contacts\/10$/i);
        });

        it('should contain on pos 5 <a> with text "Paul Irish" and href="#/contacts/9"', function () {
            var a = plugin.find("a")[4];
            expect(a.innerHTML.replace(/  /g, ' ')).toBe("Paul Irish");
            expect(a.href).toMatch(/^.*#\/contacts\/9$/i);
        });
    });

    describe('provides directive @last-contacts (attribute directive)', function() {

        beforeEach(inject(function(_$httpBackend_, _$compile_, _$rootScope_, _$controller_, Contacts){
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $scope = $rootScope.$new({});
            $httpBackend.when('GET', '/api/v1/contact').respond(someContacts());
            $scope.vl = {contacts : someContacts().objects};
            plugin = $compile('<p last-contacts bind="vl.contacts" limit="2"></p>')($scope);
            $scope.$digest();
        }));

        it('should contains title "Last added contacts:"', function () {
            expect(plugin.html()).toContain("Last added contacts");
        });

        it ('should not containt <p> element after directive was compiled', function () {
            expect(plugin.html()).not.toContain('<p');
            expect(plugin.html()).not.toContain('</p>');
        });

        it ('should not containt "last-contacts" attribute after directive was compiled', function () {
            expect(plugin.html()).not.toContain('list-contacts');
        });

        it('should contains one table', function () {
            var table = plugin.find("table");
            expect(table.length).toBe(1)
        });

        it('should have 2 rows', function () {
            var rows = plugin.find('tr');
            expect(rows.length).toBe(2);
        });

        it('should contain first <em> with text "+17501110000"', function () {
            var a = plugin.find("em")[0];
            expect(a.innerHTML).toBe("+17501110000");
        });

        it('should contain second <em> with text "no number"', function () {
            var a = plugin.find("em")[1];
            expect(a.innerHTML).toBe("no number");
        });

    });

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
            "first_name": "Paul ",
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
            "first_name": "Daniel ",
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
            "first_name": "Matthew ",
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
            "first_name": "Michael ",
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
            "first_name": "Nate ",
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
            "first_name": "Kelley ",
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
            "first_name": "Russ ",
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
    };
});
