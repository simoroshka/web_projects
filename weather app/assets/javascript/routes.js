angular.module("WeatherApp").config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: "assets/templates/home.html",
		controller: "HomeController"
	})

	.when('/forecast', {
		templateUrl: "assets/templates/forecast.html",
		controller: "ForecastController"
	})

	.otherwise({
		redirectTo: '/'
	});
});