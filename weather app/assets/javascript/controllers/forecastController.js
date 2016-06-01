angular.module("WeatherApp")
.controller('ForecastController', ['$scope', 'cityService', '$resource', 
                                   function($scope, cityService, $resource){
    $scope.city = cityService.city;
                                       
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=f96a41e7e294afdc862599110a76e950", 
                                   {callback: "JSON_CALLBACK"},
                                   {get: {method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});
    
    $scope.convertToCelcius = function(kelvin) {
        return Math.round(kelvin - 273,15);  
    };
}]);