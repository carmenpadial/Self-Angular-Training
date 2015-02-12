var app = angular.module("ngApp", ['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl:'partial.html',
            controller: 'AppCtrl',
            resolve: {
                loadData: appCtrl.loadData,
                prepData: appCtrl.prepData
            }
        })
    });

    var appCtrl = app.controller('AppCtrl', function($scope, $route){
        console.log("route: ", $route);
        $scope.data = 'Hello world!!';
    });

    appCtrl.loadData = function($q, $timeout){
        var defer = $q.defer();
        $timeout(function() {
            defer.resolve("loadData");
            console.log("loadData");
        }, 2000);
        return defer.promise;
    };

    appCtrl.prepData = function($q, $timeout){
        var defer = $q.defer();
        $timeout(function() {
            defer.resolve("prepData");
            console.log("prepData");
        }, 3000);
        return defer.promise;
    };