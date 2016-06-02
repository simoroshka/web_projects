angular.module("WeatherApp")
.controller('ForecastController', ['$scope', 'cityService', '$routeParams', 'weatherService',
                                   function($scope, cityService, $routeParams, weatherService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '1';
                                       
    $scope.weatherResult = weatherService.GetWheather($scope.city, $scope.days);
    $scope.convertToCelcius = function(kelvin) {
        return Math.round(kelvin - 273,15);  
    };
                                       
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);  
    };
}]);