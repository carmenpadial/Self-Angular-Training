angular.module('ngApp', [])
    .controller('AppCtrl', function($scope, $q, $timeout) {
        var one = $q.defer();
        var two = $q.defer();
        var three = $q.defer();

        function success(data) {
            console.log(data);
        }

        $q.all([one.promise,two.promise,three.promise]).then(success);

        one.promise.then(success);
        two.promise.then(success);
        three.promise.then(success);

        $timeout(function() {
            one.resolve("one");
        }, Math.random() * 1000)

        $timeout(function() {
            two.resolve("two");
        }, Math.random() * 1000)

        $timeout(function() {
            three.resolve("three");
        }, Math.random() * 1000)

    });