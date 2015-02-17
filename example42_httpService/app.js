var app = angular.module('ngApp', []);

app.controller('appCtrl', function($scope, $http) {

    $http.get('http://localhost:3000/users')
        .success(function(data) {
            $scope.people = data;
        })
        .error(function(error) {
            console.log("error");
        });

    $scope.addContact = function(person){
        $http.post('http://localhost:3000/users', person)
        .success(function(data){
            $scope.people = data;
        });
    };

});