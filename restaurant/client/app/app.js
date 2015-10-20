(function() {
    'use strict';

    angular
        .module('achija', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig ($routeProvider) {

        $routeProvider
            .when('/guest', {
                templateUrl: 'employees.tmpl.html',
                controller: 'EmployeesController',
                controllerAs: 'employeesVm'
            })
            .when('/employees/:employeeId', {
                templateUrl: 'employee-detail.tmpl.html',
                controller: 'EmployeeDetailController',
                controllerAs: 'empDetailVm'
            })
            .when('/owner', {
                templateUrl: './templates/login_owner.html',
                controller: 'LoginContoller',
                controllerAs: 'loginVm'
            })
            .otherwise({
                redirectTo: '/employees'
            });
    }
})();
