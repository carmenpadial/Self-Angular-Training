var app = angular.module('ngApp', ['ngRoute']);

    app.config(function($routeProvider) {
       $routeProvider
           .when('/', {
               templateUrl : "view.html",
               controller: 'ViewCtrl'
           })
           .when('/new', {
               templateUrl : 'new.html',
               controller: 'NewCtrl',
               resolve: {
                   loadData: viewCtrl.loadData
               }
           })
    });


    var appCtrl = app.controller('AppCtrl', function($rootScope) {
        $rootScope.$on("routeChangeStart", function() {
            console.log("routeChangeStart");
        });
        $rootScope.$on("routeChangeSuccess", function() {
            console.log("routeChangeSuccess");
        });
    });

    var viewCtrl = app.controller('ViewCtrl', function($rootScope) {

    });

    viewCtrl.loadData = function($q, $timeout) {
        var defer = $q.defer();
        $timeout(function() {
            defer.resolve({message:"test"});
        }, 2000);
        return defer.promise;
    }

    app.controller('NewCtrl', function($scope) {
        $scope.data = 'Hello world';
    });
