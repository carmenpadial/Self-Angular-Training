angular.module("behavior", [])
    .directive("enter", function() {
        return function(scope, element) {
            element.bind("mouseenter", function() {
                console.log("I'm inside!");
            })
        }
    })
    .directive("leave", function() {
        return function(scope, element) {
            element.bind("mouseleave", function() {
                console.log("I'm outside!");
            })
        }
    });