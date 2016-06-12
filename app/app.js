//App Module

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngResource'
]);

/*
 *  Application Page Routes
 */


myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'views/users-view.html',
                controller: 'UsersController'
            }).
            when('/users/:id', {
                templateUrl: 'views/user-details.html',
                controller: 'UserProfileController'
            }).
            when('/business', {
                templateUrl: 'views/business-view.html',
                controller: 'BusinessController'
            }).
            when('/business/:id', {
                templateUrl: 'views/business-details.html',
                controller: 'BusinessProfileController'
            }).
            when('/projects', {
                templateUrl: 'views/jobs-view.html',
                controller: 'ProjectsController'
            }).
            when('/projects/:businessId/:projectId', {
                templateUrl: 'business-details.html',
                controller: 'ViewProjectController'
            }).
            when('/settings', {
                templateUrl: 'views/settings-view.html',
                controller: 'ViewSettingsController'
            }).when('/manage', {
                templateUrl: 'views/manage-view.html',
                controller: 'ViewProjectsController'
            }).otherwise({
                redirectTo: '/users'
            });

    }
]);