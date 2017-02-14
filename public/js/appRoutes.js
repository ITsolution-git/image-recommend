angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/images', {
			templateUrl: 'views/images.html',
			controller: 'ImageController'
		});

	$locationProvider.html5Mode(true);

}]);