angular.module('WeatherApp')
.directive('forecastDay', function() {
    return {
        restrict: 'E', 
        templateUrl: 'assets/templates/directives/forecastDay.html', 
        replace: true,
        scope: {
            day: "=", 
            convertToStandard: "&", 
            convertToDate: "&",
            dateFormat: "@"
        }
    };
});