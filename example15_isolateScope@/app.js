angular.module("isolateScope", [])

    .controller("drinkCtrl", function($scope) {
        $scope.ctrlFlavor = "Soda";
    })

    .directive("drink", function() {
        return {
            scope:{
                flavor:'@' //Pass this as a string into the scope and assign it. Then you have access to it on the scope inside of your directive
            },
            template: '<div>{{flavor}}</div>'
        }
    })