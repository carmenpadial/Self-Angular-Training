angular.module("ngApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'partial.html',
                controller: 'AppCtrl'
            })
            .when('/map/:country/:state/:city',
            {
                redirectTo: function(routeParams, path, search) {
                    console.log("routeParams: " , routeParams);
                    console.log("path: " + path);
                    console.log("search: " , search);
                    return "/" + routeParams.country;
                }
            })
            .when('/USA/:name', {
                template: 'Welcome to USA!'
            })
            .when('/USA/pepe',{
                template: 'Welcome pepe!'
            })
            .otherwise(
            {
                redirectTo: "/"
            })

    })
    .controller('AppCtrl', function ($scope, $routeParams) {
        $scope.data = "Hello world!!";
    })