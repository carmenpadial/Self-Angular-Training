var app = angular.module('ngApp', ['ngRoute']);

    app.config(function($routeProvider) {
       $routeProvider
           .when('/', {
               templateUrl : "view.html",
               controller: 'ViewCtrl'
           })
           .when('/new', {
               templateUrl : 'new.html',
               controller: 'NewCtrl',   // Este controller no sera instanciado hasta que no se resuelva la promesa que va en el atributo resolve
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

    var viewCtrl = app.controller('ViewCtrl', function($scope, $location) {
        $scope.changeRoute = function() {
            $location.path("/new");
        }
    });

    viewCtrl.loadData = function($q, $timeout) {
        debugger;
        var defer = $q.defer();
        $timeout(function() {
            defer.resolve({message:"test"});
        }, 2000);
        return defer.promise;
    }

    app.controller('NewCtrl', function($scope, loadData) { //loadData es el nombre de la promesa declarada en el config
        $scope.data = 'Hello world';
        console.log("loadData ", loadData);
    });
