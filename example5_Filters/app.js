angular.module("app",[])
    .factory("Data", function(){
        return {
            message: "This is my message"
        }
    })

    .filter("reverse", function(Data) {
        return function(text) {
            return text.split("").reverse().join("");
        }
    })

    .controller("FirstCtrl", function($scope, Data) {
        $scope.data = Data;
    })

    .controller("SecondCtrl", function($scope, Data) {
        $scope.data = Data;
    })