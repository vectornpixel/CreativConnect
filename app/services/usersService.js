// Declare View Projects Controller
myApp.constant("projectUrl", "http://localhost:5500/projects");
myApp.factory("ProjectData", function($http, projectUrl){
    return $http.get(projectUrl);

});

myApp.constant("dataUrl", "http://localhost:5500/businesses");
myApp.factory("BusinessData", function($http, dataUrl){

    return $http.get(dataUrl);

});

myApp.factory('Business', function($resource){
    return $resource('http://localhost:5500/businesses/:id', {id: '@id'},{
        update: {
            method: 'PUT'
        }
    });
});

myApp.constant("userUrl", "http://localhost:5500/users");
myApp.factory("UserData", function($http, userUrl){

    return $http.get(userUrl);

});
myApp.factory('Users', function($resource){
    return $resource('http://localhost:5500/users/:id', {id: '@id'},{
        update: {
            method: 'PUT'
        }
    });
});
