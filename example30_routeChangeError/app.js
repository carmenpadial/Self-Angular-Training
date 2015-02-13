var app = angular.module("ngApp", ['ngRoute']);

app.config(function($routeProvider) {
       $routeProvider.when('/', {
           templateUrl: 'partial.html',
           controller: 'ViewCtrl',
           resolve: {
               loadData: viewCtrl.loadData
           }
       })
    });


app.controller('AppCtrl', function($scope, $rootScope) {
    $rootScope.$on('$routeChangeError', function(event, currentUrl, previousUrl, rejection) {
        console.log("event: " , event);
        console.log("beforeUrl: " , previousUrl);
        console.log("currentUrl: " , currentUrl);
        console.log("rejection: " , rejection);
    })
});

var viewCtrl = app.controller('ViewCtrl', function($scope){
    $scope.data = 'Hello world!';
});

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down");
    }, 2000)

    return defer.promise;
}
