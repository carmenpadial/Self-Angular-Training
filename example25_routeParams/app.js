angular.module("ngApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/map/:country/:state/:city',
            {
                templateUrl: 'partial.html',
                controller: 'AppCtrl'
            })
            .otherwise(
            {
                template: "Doesn't match!!"
            })

    })
    .controller('AppCtrl', function ($scope, $routeParams) {
        $scope.data = "Hello world: " + $routeParams.country + " " + $routeParams.state + " " + $routeParams.city;
    })