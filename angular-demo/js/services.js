angular.module('collegeServices',[])
	.factory("dataStudents", function($http) {

			function getStudent() {
				return $http.get("students.json")
			}

			function getColors() {
				return $http.get("colors.json")
			}

			function getJsonFile( name ) {
				return $http.get( name + ".json")
			}

			return {
				getStudent: getStudent,
				getColors: getColors,
				getJsonFile: getJsonFile
			}
		}
	)