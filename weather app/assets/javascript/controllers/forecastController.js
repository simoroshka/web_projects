angular.module("WeatherApp")
.controller('ForecastController', ['$scope', 'cityService', '$resource', '$routeParams', 
                                   function($scope, cityService, $resource, $routeParams){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days;
                                       
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=f96a41e7e294afdc862599110a76e950", 
                                   {callback: "JSON_CALLBACK"},
                                   {get: {method: "JSONP"}});
                                       
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days * 8});

    $scope.convertToCelcius = function(kelvin) {
        return Math.round(kelvin - 273,15);  
    };
}]);