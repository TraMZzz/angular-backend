describe('datePicker', function() {

    beforeEach(function () {
        module('ngRoute');
        module('ngResource');
        module('toastr');
        module('ui.bootstrap');
        module('ui.mask');
        module('ui.date');
        module('partials');
        module('myApp');
    });

    var $compile, $rootScope, $scope, $controller, plugin, ctrl;

    beforeEach(inject(function(_$compile_, _$rootScope_){    
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));
    
    describe('provides attribute directive ui-date that', function() {
    
        beforeEach(inject(function(_$compile_, _$rootScope_){
            $scope = $rootScope.$new({});
            $scope.dateOptions = {maxDate:0
                            ,dateFormat: 'yy-mm-dd'
                            ,yearRange : "c-50:+0"
                            ,changeYear: true 
                            ,changeMonth: true}
            $scope.birthday = undefined;
            input = $compile('<input ui-date="$scope.dateOptions" ng-model="birthday"/>')($scope);
            $scope.$digest();
        }));

        it('should allow set date', function () {
            var aDate = new Date(1981, 7 - 1, 1);
            input.datepicker('setDate', aDate); $.datepicker._selectDate(input);
            expect($scope.birthday).toEqual(aDate);
        });

        it ('should allow to display value of ng-model', function () {
            var aDate = new Date(1960, 3 - 1, 1); 

            $scope.$apply(function() {
               $scope.birthday = aDate; 
            });
            expect(input.datepicker('getDate')).toEqual(aDate)
        });

    });

    describe('provides transperent work with date-strings', function (){
        
        it ('should allow to set string value in model and read date from Picker', function (){
            var aDate = new Date(1980, 3 - 1, 30); //'1980-03-30'
            $scope.$apply(function() {
                $scope.birthday = '1980-03-30'; 
            });
            expect(input.datepicker('getDate')).toEqual(aDate); 
        });

    });
    
    describe('ignores non-date strings, nulls and undefined', function () {
        
        it ('should return null if ng-model set in non-datestring', function () {
            $scope.birthday = 'non-date'; $scope.$digest();
            expect(input.datepicker('getDate')).toBeNull();
        });

        it ('should return null if ng-model set in null', function () {
            $scope.birthday = null; $scope.$digest();
            expect(input.datepicker('getDate')).toBeNull();
        });

        it ('should return null if ng-model set in undefined', function () {
            $scope.birthday = undefined; $scope.$digest();
            expect(input.datepicker('getDate')).toBeNull();
        });
        
    });
    
});

