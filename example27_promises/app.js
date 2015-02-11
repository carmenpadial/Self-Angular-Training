angular.module("ngApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            template: 'Hello world',
            controller: 'AppCtrl'
        })
    })
    .controller("AppCtrl", function ($scope, $q) {
        var defer = $q.defer();

        defer.promise
            .then(function (weapon) {
                alert("take my " + weapon);
                return "bow";
            })
            .then(function (weapon) {
                alert("take my " + weapon);
                return "axe";
            })
            .then(function (weapon) {
                alert("take my " + weapon);
                return "axe";
            });

        defer.resolve("sword");
    });