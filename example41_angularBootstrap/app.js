var app = angular.module("app", []);

app.run(function($rootScope) {
    $rootScope.random = Math.random();
});

// es como es dom ready de jQuery
angular.element(document).ready(function() {
    // sustituye el ng-app
    angular.bootstrap(document.getElementById("container"), ["app"]);
    angular.bootstrap(document.getElementById("container2"), ["app"]);
});