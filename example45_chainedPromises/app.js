angular.module('FlightDemo', ['FlightServices'])
    .controller('flightDashboard', function ($scope, User, travelService, weatherService) {
        $scope.user = {
            email: User.email
        };
        $scope.departure = null;
        $scope.flight = null;
        $scope.weather = null;


        // Option 1
        var loadDeparture = function (user) {
            return travelService.getDeparture(user.email).then(function (departure) {
                $scope.departure = departure;
                return departure.flightID;
            });
        };

        var loadFlight = function (flightID) {
            return travelService.getFlight(flightID).then(function (flight) {
                $scope.flight = flight;
                return flight;
            })
        };

        var loadForecast = function () {
            return weatherService.getForecast($scope.departure.date).then(function (weather) {
                $scope.weather = weather;
                return weather;
            })
        };

        loadDeparture(User)
            .then(loadFlight)
            .then(loadForecast);


        // Option 2
        travelService.getDeparture(User.email)
            .then(function (departure) {
                $scope.departure = departure;
                return departure.flightID;
            })
            .then(function (flightID) {
                return travelService.getFlight(flightID).then(function (flight) {
                    $scope.flight = flight;
                    return flight;
                })
            })
            .then(function () {
                return weatherService.getForecast($scope.departure.date).then(function (weather) {
                    $scope.weather = weather;
                    return weather;
                })
            });

    })