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

app.directive('error', function($rootScope) {
    return {
        restrict: 'E',
        template:'<div class="alert-box alert">Error!!</div>',
        link: function() {
            $rootScope.$on("$routeChangeError", function(event, currentUrl, previousUrl, rejection) {
                console.log("event: " , event);
                console.log("beforeUrl: " , previousUrl);
                console.log("currentUrl: " , currentUrl);
                console.log("rejection: " , rejection);
            });
        }
    }
})


app.controller('AppCtrl', function($scope, $rootScope) {
    console.log("AppCtrl");
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
