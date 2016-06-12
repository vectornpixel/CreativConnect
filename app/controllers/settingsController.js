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