angular.module("ngApp", [])
    .directive("zippy", function() {
        return {
            restrict: 'E',
            transclude:true,
            scope: {
                title:"@"
            },
            templateUrl: 'zippy.html',
            link: function(scope){
                scope.isContentVisible = false;
                scope.toggleContent = function() {
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        }
    })