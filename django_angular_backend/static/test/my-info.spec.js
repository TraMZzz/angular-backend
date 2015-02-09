describe("myApp", function () {
    beforeEach(function () {
        module('ngRoute');
        module('ngResource');
        module('toastr');
        module('ui.bootstrap');
        module('ui.mask');
        module('ui.date');
        module('myApp');
    });

    describe('HomeController', function() {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it('should assign Rostuslav as firstName', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.firstName).toBe("Rostuslav");
        });

        it('should assign Steh as lastName', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.lastName).toBe("Steh");
        });

        it('should assign 1990-04-11T00:00:00.000Z as birthday', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.birthday).toBe("1990-04-11T00:00:00.000Z");
        });

        it('should assign 180cm as bio', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.bio).toBe("180cm");
        });

        it('should assign steh44@gmail.com as eMail', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.eMail).toBe("steh44@gmail.com");
        });

        it('should assign tramzzz@42cc.co as jabber', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.jabber).toBe("tramzzz@42cc.co");
        });

         it('should assign tramzzz as skype', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.skype).toBe("tramzzz");
        });

        it('should assign ... as other', function () {
            var vm = controller('HomeController', { $scope: scope });
            expect(vm.contact.other).toBe("...");
        });

    });
    
});
