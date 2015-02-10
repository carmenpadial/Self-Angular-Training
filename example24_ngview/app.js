angular.module("ngApp", ['ngRoute'])
    .config(function($routeProvider) {
       $routeProvider
           .when('/',
               {
                   templateUrl:'partial.html',
                   controller:'AppCtrl'
               })
           .otherwise(
           {
               template:"Doesn't match!!"
           })

    })
    .controller('AppCtrl', function($scope) {
        $scope.data = "Hello world"
    })