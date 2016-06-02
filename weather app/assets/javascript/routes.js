angular.module("WeatherApp").config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: "assets/templates/home.html",
		controller: "HomeController"
	})
    .when('/forecast/:days', {
		templateUrl: "assets/templates/forecast.html",
		controller: "ForecastController"        
	})

	.when('/forecast', {
		templateUrl: "assets/templates/forecast.html",
		controller: "ForecastController"
	})

	.otherwise({
		redirectTo: '/'
	});
});