angular.module("app", ["ui.router"])
    .config(function config($stateProvider){
        $stateProvider.state("index", {
            url: "",
            controller: "FirstCtrl", // FirstCtrl as first
            templateUrl: "templates/first.html"
        })
        $stateProvider.state("second", {
            url:"/second",
            controller: "SecondCtrl", // SecondCtrl as second
            templateUrl: "templates/second.html"
        })
    })

    .service("greeting", function Greeting(){
        debugger;
        this.message = "Default";
    })

    .controller("FirstCtrl", function ($scope, greeting) {
        $scope.greeting = greeting;
    })

    .controller("SecondCtrl", function ($scope, greeting) {
        debugger;
        $scope.greeting = greeting;
    });

//    .controller("FirstCtrl", function FirstCtrl(greeting) {
//        this.greeting = greeting;
//    })
//
//    .controller("SecondCtrl", function SecondCtrl(greeting) {
//        debugger;
//        this.greeting = greeting;
//    });