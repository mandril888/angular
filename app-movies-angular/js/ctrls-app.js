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

		var urlPopularMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=popularity.desc';
		$http.get( urlPopularMovies )
			.then( function( dataPopularMovies ) {
				$scope.popularMovies = dataPopularMovies.data.results;
				console.log( $scope.popularMovies );
			})
	
	})

	.controller( 'upcomingMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		// global var to view in index navbar the actual page
		$rootScope.section = "Upcoming Movies";

		$scope.upcomingMovies = "";

		var urlUpcomingMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=release_date.desc';
		$http.get( urlUpcomingMovies )
			.then( function( dataUpcomingMovies ) {
				$scope.upcomingMovies = dataUpcomingMovies.data.results;
				console.log( $scope.upcomingMovies );
			})
	
	})

	.controller( 'nowPlayingMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		$rootScope.section = "Now Playing Movies";

		$scope.nowPlayingMovies = "";

		var urlNowPlayingMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=upcoming.desc';
		$http.get( urlNowPlayingMovies )
			.then( function( dataNowPlayingMovies ) {
				$scope.nowPlayingMovies = dataNowPlayingMovies.data.results;
				console.log( $scope.nowPlayingMovies );
			})
	
	})

	.controller( 'topRattedMoviesCtrl' , function ( $scope, $rootScope, $http ) {

		$rootScope.section = "Top Ratted Movies";

		$scope.topRattedMovies = "";

		var urlTopRattedMovies = 'http://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&sort_by=vote_average.desc';
		$http.get( urlTopRattedMovies )
			.then( function( dataTopRattedMovies ) {
				$scope.topRattedMovies = dataTopRattedMovies.data.results;
				console.log( $scope.topRattedMovies );
			})
	
	})

	.filter('highlight', function($sce) {
	    return function(text, phrase) {
	      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
	        '<span class="highlighted">$1</span>')

	      return $sce.trustAsHtml(text)
	    }
	})