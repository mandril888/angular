angular.module( 'allCtrls', [] )

	.controller( 'movieCollectionCtrl' , function ( $scope, $rootScope ) {

		$rootScope.section = "MovieCollection";

	})

	.controller( 'popularMoviesCtrl' , function ( $scope, $rootScope ) {

		$rootScope.section = "PopularMovies";
	
	})

	.controller( 'upcomingMoviesCtrl' , function ( $scope, $rootScope ) {

		$rootScope.section = "UpcomingMovies";
	
	})

	.controller( 'nowPlayingMoviesCtrl' , function ( $scope, $rootScope ) {

		$rootScope.section = "NowPlayingMovies";
	
	})

	.controller( 'topRattedMoviesCtrl' , function ( $scope, $rootScope ) {

		$rootScope.section = "TopRattedMovies";
	
	})