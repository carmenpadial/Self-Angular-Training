angular.module("twitterApp", [])
    .controller("twitterCtrl", function($scope) {
        $scope.addTweet = function() {
            alert("adding tweet");
        }
    })

    .directive("enter", function(){
        return function(scope, element, attrs) {
            element.bind("mouseenter", function() {
                scope.$apply(attrs.enter); // This will kind of parse this string and find it on this scope and then invoke it
            });
        }
    });