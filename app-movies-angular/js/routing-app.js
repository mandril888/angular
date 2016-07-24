angular.module( 'configRouting', [] )
	
	.config( function( $routeProvider ){

			$routeProvider
				.when('/',{
					templateUrl: '/templates/movieCollection.html',
					controller: 'movieCollectionCtrl'
				})
				.when('/movieCollection',{
					templateUrl: '/templates/movieCollection.html',
					controller: 'movieCollectionCtrl'
				})
				.when('/popularMovies',{
					templateUrl: '/templates/popularMovies.html',
					controller: 'popularMoviesCtrl'
				})
				.when('/upcomingMovies',{
					templateUrl: '/templates/upcomingMovies.html',
					controller: 'upcomingMoviesCtrl'
				})
				.when('/nowPlayingMovies',{
					templateUrl: '/templates/nowPlayingMovies.html',
					controller: 'nowPlayingMoviesCtrl'
				})
				.when('/topRattedMovies',{
					templateUrl: '/templates/topRattedMovies.html',
					controller: 'topRattedMoviesCtrl'
				})
				.when('/info/:movieName', {
					templateUrl: '/templates/infoMovies.html',
					controller: 'infoMoviesCtrl'
				})
				.otherwise({ redirectTo: '/' }); ;

	})