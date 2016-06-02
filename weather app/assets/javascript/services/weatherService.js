angular.module('WeatherApp')
.service('weatherService', ['$resource', function($resource) {
    
    this.GetWheather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=f96a41e7e294afdc862599110a76e950", 
                                   {callback: "JSON_CALLBACK"},
                                   {get: {method: "JSONP"}});
                                       
        return weatherAPI.get({q: city, cnt: days * 8});
        
    };
   

}]);