myApp.controller("ProjectsController", function($scope,ProjectData){

    ProjectData.success(function(data) {
        $scope.projectsinfo = data;
    });

})
    .controller("BusinessController", function($scope,BusinessData){

    BusinessData.success(function(data) {
        $scope.clientsinfo = data;
    });


})
    .controller("BusinessProfileController", function($scope,$routeParams, Business){

    $scope.business = Business.get({id: $routeParams.id});

})
    .controller("UsersController", function($scope,UserData){

    UserData.success(function(data) {
        $scope.usersinfo = data;
    });

})
    .controller("UserProfileController", function($scope,$routeParams, Users){

    $scope.users = Users.get({id: $routeParams.id});

});

