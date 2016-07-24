angular.module( 'allCtrls', [] )

	.controller( 'movieCollectionCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Movie Collection";

		$scope.movieCollection = "";

		var urlMovieCollection = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4';
		$http.get( urlMovieCollection )
			.then( function( dataMovieCollection ) {
				$scope.movieCollection = dataMovieCollection.data.results;
			})
	})

	.controller( 'popularMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Popular Movies";

		$scope.popularMovies = "";

		var urlPopularMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=revenue.desc';
		$http.get( urlPopularMovies )
			.then( function( dataPopularMovies ) {
				$scope.popularMovies = dataPopularMovies.data.results;
			})
	
	})

	.controller( 'upcomingMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Upcoming Movies";

		$scope.upcomingMovies = "";

		var urlUpcomingMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=original_title.asc';
		$http.get( urlUpcomingMovies )
			.then( function( dataUpcomingMovies ) {
				$scope.upcomingMovies = dataUpcomingMovies.data.results;
			})
	
	})

	.controller( 'nowPlayingMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Now Playing Movies";

		$scope.nowPlayingMovies = "";

		var urlNowPlayingMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=vote_count.desc';
		$http.get( urlNowPlayingMovies )
			.then( function( dataNowPlayingMovies ) {
				$scope.nowPlayingMovies = dataNowPlayingMovies.data.results;
			})
	
	})

	.controller( 'topRattedMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Top Ratted Movies";

		$scope.topRattedMovies = "";

		var urlTopRattedMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=vote_average.desc';
		$http.get( urlTopRattedMovies )
			.then( function( dataTopRattedMovies ) {
				$scope.topRattedMovies = dataTopRattedMovies.data.results;
			})
	
	})

	.controller( 'infoMoviesCtrl' , function ( $scope, $rootScope, $http, $routeParams ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Info Movie";

		$scope.idFilm = $routeParams;

		$scope.infoMovies = "";

		var urlInfoMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4';
		$http.get( urlInfoMovies )
			.then( function( dataInfoMovies ) {
				$scope.infoMovies = dataInfoMovies.data.results;
				console.log( $scope.infoMovies );
			})
	
	})

	//this is a filter to highlight the words searched in the searching nav
	.filter('highlight', function($sce) {
	    return function(text, phrase) {
	      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
	        '<span class="highlighted">$1</span>')

	      return $sce.trustAsHtml(text)
	    }
	})