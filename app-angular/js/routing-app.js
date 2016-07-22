angular.module( 'configRouting', [] )
	
	.config( function( $routeProvider ){

			$routeProvider
				.when('/',{
					templateUrl: '/templates/home.html',
					controller: 'homeCtrl'
				})
				.when('/home',{
					templateUrl: '/templates/home.html',
					controller: 'homeCtrl'
				})
				.when('/about',{
					templateUrl: '/templates/about.html',
					controller: 'aboutCtrl'
				})
				.when('/form',{
					templateUrl: '/templates/form.html',
					controller: 'formCtrl'
				})
				.when('/client/:ID',{
					templateUrl: '/templates/client.html',
					controller: 'clientCtrl'
				})
				.otherwise({ redirectTo: '/' }); ;

	})