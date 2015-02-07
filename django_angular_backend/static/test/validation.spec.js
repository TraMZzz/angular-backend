describe('From validation:', function() {

   beforeEach(function () {
        module('ngRoute');
        module('ngResource');
        module('toastr');
        module('ui.bootstrap');
        module('ui.mask');
        module('myApp');
    });

    var $compile, $rootScope, $scope, testForm;

    beforeEach(inject(function(_$compile_, _$rootScope_){    
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new({pers : {} });
        $compile(FormHTML())($scope);
        $scope.$digest();
        
    }));

    describe('provide email field', function() {

        it('should mark field, that has value "test", as invalid.', function () {
            $scope.testForm.email.$setViewValue("test");
            $scope.$digest();
            
            expect($scope.testForm.email.$invalid).toBeTruthy();
        });

        it('should add $error.email field, that has value "test"', function () {
            $scope.testForm.email.$setViewValue ("R2D2");
            $scope.$digest();
            expect($scope.testForm.email.$error.email).toBeDefined();
            expect($scope.testForm.email.$error.email).toBeTruthy();
        });

        it('should mark field, that has value "test@test.com", as valid.', function () {
            $scope.testForm.email.$setViewValue ("test@test.com");
            $scope.$digest();
            expect($scope.testForm.email.$valid).toBeTruthy();
        });

        it('should remove any $error.email field, that has value "test@test.com"', function () {
            $scope.testForm.email.$setViewValue("test@test.com");
            $scope.$digest();
            expect($scope.testForm.email.$error.email).toBeUndefined();
        });
        
    });
    
    describe('provide phone field', function() {
        
        it('should mark field, that has value "12345678901", as invalid.', function () {
            $scope.testForm.cellPhone.$setViewValue ("1234567890");
            $scope.$digest();
            expect($scope.testForm.cellPhone.$invalid).toBeTruthy();
        });

        it('should add $error.mask field, that has value "12345678901"', function () {
            $scope.testForm.cellPhone.$setViewValue("1234567890");
            $scope.$digest();
            expect($scope.testForm.cellPhone.$error.mask).toBeDefined();
            expect($scope.testForm.cellPhone.$error.mask).toBeTruthy();
        });

        it('should mark field, that has value "+12345678901", as valid.', function () {
            $scope.testForm.cellPhone.$setViewValue("+12345678901");
            $scope.$digest();
            expect($scope.testForm.cellPhone.$valid).toBeTruthy();
        });

        it('should remove any $error.phone field, that has value "+12345678901"', function () {
            $scope.testForm.cellPhone.$setViewValue("+12345678901");
            $scope.$digest();
            expect($scope.testForm.cellPhone.$error.phone).toBeUndefined();
        });
        
    });
    
    describe('provide date field', function() {
        
        it('should mark field, that has value "2122-01-1t", as invalid.', function () {
            $scope.testForm.birthday.$setViewValue ("2122-01-1t");
            $scope.$digest();
            expect($scope.testForm.birthday.$invalid).toBeTruthy();
        });
        
        it('should add $error.date field, that has value "2122-01-1t", as invalid.', function () {
            $scope.testForm.birthday.$setViewValue ("2122-01-1t");
            $scope.$digest();
            expect($scope.testForm.birthday.$error.date).toBeDefined();
            expect($scope.testForm.birthday.$error.date).toBeTruthy();
        });
        
        it('should mark field, that has value "Dec 31, 1945", as valid.', function () {
            $scope.testForm.birthday.$setViewValue("Dec 31, 1945");
            $scope.$digest();
            expect($scope.testForm.birthday.$valid).toBeTruthy();
        });

        it('should remove any $error.date field, that has value "Dec 31, 1945"', function () {
            $scope.testForm.birthday.$setViewValue("Dec 31, 1945");
            $scope.$digest();
            expect($scope.testForm.birthday.$error.date).toBeUndefined();
        });
        
    });
    function FormHTML() {
        return ""+
        "<form name='testForm'> \
            <input type='email' name='email' ng-model='vi.contact.email' required> \
            <input type='tel' name='cellPhone' ng-model='vi.contact.cellphone_number' ui-mask='+99999999999' required> \
            <input datepicker-popup='MMM dd, yyyy' type='text' name='birthday' ng-model='vi.contact.birth_date' > \
        </form>";
            };
});
