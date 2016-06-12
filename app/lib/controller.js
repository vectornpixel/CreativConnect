// Create Users Controller
var UsersControllers = angular.module('UsersControllers', []);

// Declare View Users Controller

UsersControllers.controller('ViewUsersController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data/users.json').success(function(data) {
            $scope.usersinfo = data;
        });
    }

]);

// Declare View User Porfile Controller
UsersControllers.controller('UserProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/data/users/' + $routeParams.userId + '.json').success(function(data) {
            $scope.userinfo = data;
        });

    }
]);

/*******************************************/

//Create Businesses Controller
var BusinessControllers = angular.module('BusinessControllers', []);

// Declare View Businesses Controller

BusinessControllers.controller('ViewBusinessController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data/businesses.json').success(function(data) {
            $scope.clientsinfo = data;
        });
    }

]);

// Declare View Businesses Profile Controller
BusinessControllers.controller('BusinessProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/data/clients/' + $routeParams.businessId + '.json').success(function(data) {
            $scope.clientinfo = data;
        });

    }
]);


/*******************************************/

//Create Projects Controller
var ProjectsControllers = angular.module('ProjectsControllers', []);

// Declare View Projects Controller

ProjectsControllers.controller('ViewProjectsController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data/projects.json').success(function(data) {
            $scope.projectsinfo = data;
        });
    }

]);

ProjectsControllers.controller('ViewProjectController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/data/clients/projects' + $routeParams.businessId + '-project.json').success(function(data) {
            $scope.projectinfo = data;
        });

    }
]);
/*******************************************/

//Create Settings Controller
var SettingsControllers = angular.module('SettingsControllers', []);

// Declare View Projects Controller
SettingsControllers.controller('ViewSettingsController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data/projects.json').success(function(data) {
            $scope.projectsinfo = data;
        });
    }

]);

SettingsControllers.controller('ViewSettingsController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/data/clients/projects' + $routeParams.businessId + '-project.json').success(function(data) {
            $scope.projectinfo = data;
        });

    }
]);