(function(){
    'use strict';

    var states = [
        {
            name: 'logins',
            state:
                {
                    url:'/logins',
                    templateUrl: '../views/login.html',
                    data: {
                        text: "Login",
                        visible: false
                    }
                }
        },
        {
            name: 'student',
            state:
                {
                    url:'/student',
                    templateUrl: '../views/student.html',
                    data: {
                        text: "Student",
                        visible: false
                    }
                }
        },
        {
            name: 'exams',
            state:
                {
                    url:'/exam',
                    templateUrl: '../views/staff.html',
                    data: {
                        text: "exam",
                        visible: false
                    }
                }
        }
        /*{
            name: 'customer',
            state:
                {
                    url:'/customer',
                    templateUrl: '../views/student.html',
                    data: {
                        text: "customer",
                        visible: false
                    }
                }
        },
        {
            name: 'admin',
            state:
                {
                    url:'/admin',
                    templateUrl: '../views/admin.html',
                    data: {
                        text: "admin",
                        visible: false
                    }
                }
        }*/
    ];

    var app = angular.module('dbms', [
        'ui.router'
         ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/logins');

            angular.forEach(states, function(state) {
                $stateProvider.state(state.name, state.state);
            });
        });



})();

