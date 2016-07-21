
angular.module("mySpotifyApp",[])

			.controller("controlerModel", function($scope, $http) {

				var urlArtist = 'https://api.spotify.com/v1/search?type=artist&query=';
				$scope.artists = "";

				$scope.submit = function() {
					// console.log('ctrl 1');
					var url  = urlArtist + $scope.searchArtist
					$http.get( url )
						.then( function( dataFromApi ) {
							// console.log( dataFromApi );
							$scope.artists = dataFromApi.data.artists.items;
							// console.log( $scope.artists );
						})
				}
			})

			.controller("searchAlbum", function($scope, $http, $rootScope) {

				var urlAlbumFirst = "https://api.spotify.com/v1/artists/";
				var urlAlbumLast = "/albums";
				$rootScope.albums = "";

			$scope.change = function() {
					// console.log('ctrl 2');
					var url  = urlAlbumFirst + $scope.artistId + urlAlbumLast;
					$http.get(url)
						.then(function( dataFromApi2 ) {
							// console.log( dataFromApi2 );
							$rootScope.albums = dataFromApi2.data.items;
							// console.log( $rootScope.albums );
						})
				}
			})

			.controller("searchSongs", function($scope, $http, $rootScope) {

				var urlSongFirst = "https://api.spotify.com/v1/albums/";
				var urlSongLast = "/tracks";
				$rootScope.songs = "";

			$scope.change2 = function() {
					// console.log('ctrl 3');
					var url  = urlSongFirst + $scope.albumId + urlSongLast;
					$http.get(url)
						.then(function( dataFromApi3 ) {
							// console.log( dataFromApi3 );
							$rootScope.songs = dataFromApi3.data.items;
							console.log( $rootScope.songs );
						})
				}
			})

			